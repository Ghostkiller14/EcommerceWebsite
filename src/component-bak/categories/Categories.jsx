import React, { useContext } from "react";
import { CategoryContext } from "../../context-bak/CategoryContext";

const Categories = () => {
  const { category } = useContext(CategoryContext);

  const items = category || [];

  if (items.length === 0) {
    return <p>No Category Available</p>;
  }

  return (
    <div>
      {items.map((categories) => {
        return <h1>{categories.name}</h1>;
      })}
    </div>
  );
};

export default Categories;
