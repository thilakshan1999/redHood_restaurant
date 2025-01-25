import { Outlet } from "react-router-dom";
import Header from "../sections/header/header";
import Footer from "../sections/footer/footer";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures the layout takes full height
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
