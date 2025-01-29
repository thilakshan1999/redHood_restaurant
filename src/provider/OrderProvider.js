import React, { createContext, useState } from "react";
import OrderInfo from "../models/orderInfo";
import { FoodReceipt } from "../models/receiptInfo";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(dummyOrderList);

  // Add a new order
  const addOrder = (orderData) => {
    setOrders((prevOrders) => [
      ...prevOrders,
      new OrderInfo(
        orderData.orderId,
        orderData.customerName,
        orderData.orderOn,
        orderData.itemsCount,
        orderData.price,
        orderData.foodList,
        orderData.status
      ),
    ]);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    console.log(orderId, newStatus);
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const dummyOrderList = [
  new OrderInfo(
    "ORD001",
    "John Doe",
    "2025-01-25",
    5,
    150.0,
    [new FoodReceipt("Pizza", 2, 50), new FoodReceipt("Pasta", 3, 25)],
    "pending"
  ),
  new OrderInfo(
    "ORD002",
    "Jane Smith",
    "2025-01-24",
    3,
    120.0,
    [new FoodReceipt("Burger", 2, 40), new FoodReceipt("Fries", 1, 30)],
    "confirmed"
  ),
  new OrderInfo(
    "ORD003",
    "Tom Brown",
    "2025-01-23",
    7,
    250.0,
    [new FoodReceipt("Steak", 2, 70), new FoodReceipt("Salad", 5, 36)],
    "shipped"
  ),
  new OrderInfo(
    "ORD004",
    "Alice Green",
    "2025-01-22",
    2,
    80.0,
    [new FoodReceipt("Soup", 2, 40)],
    "delivered"
  ),
  new OrderInfo(
    "ORD005",
    "Bob White",
    "2025-01-21",
    4,
    180.0,
    [new FoodReceipt("Pizza", 1, 60), new FoodReceipt("Salad", 3, 40)],
    "pending"
  ),
  new OrderInfo(
    "ORD006",
    "Charlie Black",
    "2025-01-20",
    6,
    220.0,
    [new FoodReceipt("Sushi", 3, 80), new FoodReceipt("Miso Soup", 3, 40)],
    "confirmed"
  ),
  new OrderInfo(
    "ORD007",
    "David Blue",
    "2025-01-19",
    8,
    300.0,
    [new FoodReceipt("Pasta", 4, 30), new FoodReceipt("Pizza", 4, 60)],
    "shipped"
  ),
  new OrderInfo(
    "ORD008",
    "Eva Gray",
    "2025-01-18",
    9,
    350.0,
    [new FoodReceipt("Tacos", 5, 50), new FoodReceipt("Burritos", 4, 75)],
    "delivered"
  ),
];

export default OrderProvider;
