import React from "react";
import { Helmet } from "react-helmet";
import CartSection from "../sections/main/cart/cartSection";

const CartPage = () => {
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <CartSection />
    </>
  );
};

export default CartPage;
