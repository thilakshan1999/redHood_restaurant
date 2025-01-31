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
    "1234567890", // Number
    "delivery", // Order Type
    "123 Main St, City, Country", // Address
    "johndoe@example.com", // Email Address
    "Leave at the doorstep", // Delivery Note
    "2025-01-25", // Order On
    5, // Items Count
    150.0, // Cart Total
    15.0, // Delivery Charge
    10.0, // Service Charge
    175.0, // Net Total (Cart Total + Delivery + Service)
    [new FoodReceipt("Pizza", 2, 50), new FoodReceipt("Pasta", 3, 25)], // Food List
    "pending", // Status
    "cash_on_delivery" //paymentMethod
  ),
  new OrderInfo(
    "ORD002",
    "Jane Smith",
    "9876543210", // Number
    "delivery", // Order Type
    "456 Oak St, City, Country", // Address
    "janesmith@example.com", // Email Address
    "Call when ready for pickup", // Delivery Note
    "2025-01-24", // Order On
    3, // Items Count
    120.0, // Cart Total
    10.0, // Delivery Charge
    8.0, // Service Charge
    138.0, // Net Total
    [new FoodReceipt("Burger", 2, 40), new FoodReceipt("Fries", 1, 30)], // Food List
    "confirmed", // Status
    "cash_on_delivery" //paymentMethod
  ),
  new OrderInfo(
    "ORD003",
    "Tom Brown",
    "1112233445", // Number
    "delivery", // Order Type
    "789 Pine St, City, Country", // Address
    "tombrown@example.com", // Email Address
    "Ring the bell", // Delivery Note
    "2025-01-23", // Order On
    7, // Items Count
    250.0, // Cart Total
    20.0, // Delivery Charge
    15.0, // Service Charge
    285.0, // Net Total
    [new FoodReceipt("Steak", 2, 70), new FoodReceipt("Salad", 5, 36)], // Food List
    "shipped", // Status
    "card_payment" //paymentMethod
  ),
  new OrderInfo(
    "ORD004",
    "Alice Green",
    "9988776655", // Number
    "delivery", // Order Type
    "101 Birch St, City, Country", // Address
    "alicegreen@example.com", // Email Address
    "Ready for pickup", // Delivery Note
    "2025-01-22", // Order On
    2, // Items Count
    80.0, // Cart Total
    10.0, // Delivery Charge
    5.0, // Service Charge
    95.0, // Net Total
    [new FoodReceipt("Soup", 2, 40)], // Food List
    "delivered", // Status
    "card_payment" //paymentMethod
  ),
  new OrderInfo(
    "ORD005",
    "Bob White",
    "1122334455", // Number
    "take_away", // Order Type
    "234 Cedar St, City, Country", // Address
    "bobwhite@example.com", // Email Address
    "Leave at the back door", // Delivery Note
    "2025-01-21", // Order On
    4, // Items Count
    180.0, // Cart Total
    12.0, // Delivery Charge
    9.0, // Service Charge
    201.0, // Net Total
    [new FoodReceipt("Pizza", 1, 60), new FoodReceipt("Salad", 3, 40)], // Food List
    "pending", // Status
    "cash_on_delivery" //paymentMethod
  ),
  new OrderInfo(
    "ORD006",
    "Charlie Black",
    "6677889900", // Number
    "take_away", // Order Type
    "567 Maple St, City, Country", // Address
    "charlieblack@example.com", // Email Address
    "Gift wrap, please", // Delivery Note
    "2025-01-20", // Order On
    6, // Items Count
    220.0, // Cart Total
    18.0, // Delivery Charge
    12.0, // Service Charge
    250.0, // Net Total
    [new FoodReceipt("Sushi", 3, 80), new FoodReceipt("Miso Soup", 3, 40)], // Food List
    "confirmed", // Status
    "card_payment" //paymentMethod
  ),
  new OrderInfo(
    "ORD007",
    "David Blue",
    "2233445566", // Number
    "take_away", // Order Type
    "678 Elm St, City, Country", // Address
    "davidblue@example.com", // Email Address
    "Leave at the front door", // Delivery Note
    "2025-01-19", // Order On
    8, // Items Count
    300.0, // Cart Total
    25.0, // Delivery Charge
    15.0, // Service Charge
    340.0, // Net Total
    [new FoodReceipt("Pasta", 4, 30), new FoodReceipt("Pizza", 4, 60)], // Food List
    "shipped", // Status
    "cash_on_delivery" //paymentMethod
  ),
  new OrderInfo(
    "ORD008",
    "Eva Gray",
    "4455667788", // Number
    "delivery", // Order Type
    "890 Fir St, City, Country", // Address
    "evagray@example.com", // Email Address
    "Please deliver after 6 PM", // Delivery Note
    "2025-01-18", // Order On
    9, // Items Count
    350.0, // Cart Total
    30.0, // Delivery Charge
    18.0, // Service Charge
    398.0, // Net Total
    [new FoodReceipt("Tacos", 5, 50), new FoodReceipt("Burritos", 4, 75)], // Food List
    "delivered", // Status
    "cash_on_delivery" //paymentMethod
  ),
];

export default OrderProvider;
