import React from "react";
import { Helmet } from "react-helmet";
import CategoriesSection from "../sections/main/categories/categoriesSection";
import { useParams } from "react-router-dom";

const CategoriesPage = () => {
  const { name } = useParams();
  return (
    <>
      <Helmet>
        <title>Category</title>
      </Helmet>
      <CategoriesSection name={name} />
    </>
  );
};

export default CategoriesPage;
