import React, { useContext } from "react";

import Categories from "../components/categories/Categories";
import { CategoryContext } from "../context/categoryContext";

const CategoryPage = () => {
  const { isLoading, error } = useContext(CategoryContext);

  if (isLoading) {
    return <h2>Products are Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <Categories />
    </div>
  );
};

export default CategoryPage;
