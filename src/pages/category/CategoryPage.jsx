// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";

function CategoryPage() {
  const { category } = useParams();
  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center py-10 text-3xl sm:text-6xl sm:leading-relaxed text-secondary capitalize font-semibold">
        {category}
      </h1>
      <CategoryWrapper />
    </div>
  );
}

export default CategoryPage;
