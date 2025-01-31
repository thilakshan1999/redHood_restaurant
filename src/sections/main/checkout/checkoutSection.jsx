import { Box } from "@mui/material";
import ContentHeading from "../../../components/ui/heading/contentHeading";
import CartCard from "../../../components/ui/card/cartCard";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../provider/CartProvider";
import PrizeBox from "../../../components/ui/priceBox";
import DeliveryForm from "./deliveryForm";
import ReceiptDialogBox from "../../../components/ui/dialogBox/reciptDialogBox";
import { FoodReceipt } from "../../../models/receiptInfo";
import { OrderContext } from "../../../provider/OrderProvider";
import OrderInfo from "../../../models/orderInfo";

const CheckoutSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const cartTotal = getCartTotal();
  const deliverCharge = 100;
  const serviceCharge = cartTotal / 10;
  const total = cartTotal + deliverCharge + serviceCharge;
  const [preparedFoodItems, setPreparedFoodItems] = useState([]);
  const { addOrder } = useContext(OrderContext);

  const [order, setOrder] = useState(
    new OrderInfo(
      "", // orderId
      "", // customerName
      "", // phoneNumber
      "", // orderType
      "", // address
      "", // emailAddress
      "", // deliveryNote
      "", // orderOn
      0, // itemsCount
      0.0, // cartTotal
      0.0, // deliveryCharge
      0.0, // serviceCharge
      0.0, // netTotal
      [], // foodList (empty array)
      "", // status
      "" // paymentMethod
    )
  );

  useEffect(() => {
    const prepareFoodItems = () => {
      return cartItems.map(
        (cartInfo) =>
          new FoodReceipt(
            cartInfo.foodInfo.name,
            cartInfo.count,
            cartInfo.foodInfo.price
          )
      );
    };

    const foodItems = prepareFoodItems();
    setPreparedFoodItems(foodItems);
  }, []);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const onOrderPlaced = (orderData) => {
    const newOrder = {
      orderId: `ORD${Math.floor(100 + Math.random() * 900)}`,
      customerName: orderData.name,
      number: orderData.phone_number,
      orderType: orderData.order_type,
      address: orderData.address,
      emailAddress: orderData.email,
      deliveryNote: orderData.note,
      itemsCount: cartItems.length,
      cartTotal: cartTotal,
      deliveryCharge: deliverCharge,
      serviceCharge: serviceCharge,
      netTotal: total,
      status: "pending",
      paymentMethod: orderData.payment_method,
      foodList: preparedFoodItems,
      orderOn: new Date().toISOString().split("T")[0],
    };

    console.log("New order created:", newOrder);
    addOrder(newOrder);
    setOrder(newOrder);
    //clearCart();
    handleOpenDialog();
  };

  return (
    <Box
      container
      spacing={2}
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        padding: {
          xs: "40px 20px ",
          md: "40px 40px",
        },
      }}
    >
      <ContentHeading tittle={"Cart"} />
      {/* Food  Items */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 3,
          marginTop: "40px",
        }}
      >
        {cartItems.map((cartInfo, index) => (
          <CartCard key={index} cartInfo={cartInfo} isEditable={false} />
        ))}
      </Box>

      {/* Net Price Info */}
      <Box sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <PrizeBox
          backgroundColor="#f8f9fa"
          title="Cart Total"
          price={cartTotal}
        />
        <PrizeBox
          backgroundColor="#f8f9fa"
          title="Deliver Charge"
          price={deliverCharge}
        />
        <PrizeBox
          backgroundColor="#f8f9fa"
          title="Service Charge"
          price={serviceCharge}
        />
        <PrizeBox backgroundColor="#eeeeee" title="Net Total" price={total} />
      </Box>

      {/* Form  */}
      <ContentHeading tittle={"Delivery Details"} />

      <DeliveryForm onOrderPlaced={onOrderPlaced} />

      <ReceiptDialogBox
        open={openDialog}
        onClose={handleCloseDialog}
        orderInfo={order}
      />
    </Box>
  );
};

export default CheckoutSection;
