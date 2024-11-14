import { createContext, useEffect, useState } from "react";
import {
  addCategory,
  deleteCategoryById,
  getCategories,
  updateCategory,
} from "../service-bak/CategoryService";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategory] = useState([]);

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

  const deleteCategory = async (id) => {
    try {
      const res = await deleteCategoryById(id);

      console.log(res);

      setCategory((prevCategories) =>
        prevCategories.filter((category) => category.categoryId !== id)
      );
    } catch {
      setError(error);
    }
  };

  const addCategoryByName = async (formData) => {
    try {
      const res = await addCategory(formData);

      setCategory((prevCategories) => [...prevCategories, res]);

      console.log(res);
    } catch {
      setError(error);
    }
  };

  const updateCategoryName = async (id, formData) => {
    try {
      const res = await updateCategory(id, formData);

      setCategory((prevCategories) =>
        prevCategories.map((category) =>
          category.categoryId === id ? { ...category, ...res } : category
        )
      );
    } catch {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCategryData();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        isLoading,
        error,
        categories,
        updateCategoryName,
        updateCategory,
        setCategory,
        deleteCategory,
        addCategoryByName,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
