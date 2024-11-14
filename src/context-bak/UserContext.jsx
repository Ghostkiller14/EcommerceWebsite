import { createContext, useEffect, useState } from "react";
import {
  deleteUserById,
  getAllUsers,
  getUserInfo,
  updateUserInfo,
} from "../service-bak/UserService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const res = await getAllUsers();
      console.log(res);
      setUsers(Array.isArray(res) ? res : res.items || []);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setIsLoading(true);

    try {
      await deleteUserById(id);

      setUsers((prevUser) => prevUser.filter((user) => user.userId !== id));
      setIsLoading(false);
    } catch {
      setError(error);
      setIsLoading(false);
    }
  };

  const getUserById = async (id) => {
    setIsLoading(true);

    try {
      await getUserInfo(id);
      setIsLoading(false);
    } catch {
      setError(error);
      setIsLoading(false);
    }
  };

  const updateUser = async (id, data) => {
    setIsLoading(true);

    try {
      const res = await updateUserInfo(id, data);

      setUsers((prevUser) =>
        prevUser.map((user) =>
          user.userId === id ? { ...user, ...res } : user
        )
      );

      setIsLoading(false);
    } catch {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        isLoading,
        error,
        updateUser,
        getUserById,
        deleteUser,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
