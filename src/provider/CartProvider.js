// CartContext.js
import React, { createContext, useState } from "react";
import CartInfo from "../models/cartInfo";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (foodInfo, count) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.foodInfo.id === foodInfo.id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.foodInfo.id === foodInfo.id
            ? new CartInfo(item.foodInfo, count)
            : item
        );
      }
      return [...prevCart, new CartInfo(foodInfo, count)];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.foodInfo.id !== id)
    );
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.foodInfo.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
