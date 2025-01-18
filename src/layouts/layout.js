import { Outlet } from "react-router-dom";
import Header from "../sections/header/header";
import Footer from "../sections/footer/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
