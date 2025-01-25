import React from "react";
import HomeSection from "../sections/main/home/homeSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeSection />
    </>
  );
};

export default HomePage;
