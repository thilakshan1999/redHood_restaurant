import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import HomePage from "../pages/homePage";
import AboutPage from "../pages/aboutPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};
export default Router;
