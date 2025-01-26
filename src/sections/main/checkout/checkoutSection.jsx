import { Box, useTheme } from "@mui/material";
import ContentHeading from "../../../components/ui/heading/contentHeading";
import CartCard from "../../../components/ui/card/cartCard";
import { useContext } from "react";
import { CartContext } from "../../../provider/CartProvider";
import PrizeBox from "../../../components/ui/priceBox";
import DeliveryForm from "./deliveryForm";

const CheckoutSection = () => {
  const { cartItems, getCartTotal } = useContext(CartContext);
  const cartTotal = getCartTotal();
  const deliverCharge = 100;
  const serviceCharge = cartTotal / 10;
  const total = cartTotal + deliverCharge + serviceCharge;

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

      <DeliveryForm />
    </Box>
  );
};

export default CheckoutSection;
