import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import HomePage from "../pages/homePage";
import CategoriesPage from "../pages/categoriesPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/category/:name" element={<CategoriesPage />} />
      </Route>
    </Routes>
  );
};
export default Router;
