import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import HomePage from "../pages/homePage";
import CategoriesPage from "../pages/categoriesPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import AdminPage from "../pages/adminPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/category/:name" element={<CategoriesPage />} />
      </Route>
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};
export default Router;
