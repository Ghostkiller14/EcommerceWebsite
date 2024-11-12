import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("user") || null;

    if (userLocalStorage) {
      setUserLoggedIn(JSON.parse(userLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
