import { createContext, useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([]);

  const fetchCategryData = async () => {
    try {
      setIsLoading(true);
      const res = await getCategories();
      console.log(res);
      //setCategory(res)
      setCategory(Array.isArray(res) ? res : res.items || []);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategryData();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ isLoading, error, category, setCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
