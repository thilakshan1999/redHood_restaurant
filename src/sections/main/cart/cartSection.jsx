import { Box, useTheme } from "@mui/material";

import ContentHeading from "../../../components/ui/heading/contentHeading";
import CartCard from "../../../components/ui/card/cartCard";
import PrizeBox from "../../../components/ui/priceBox";
import CustomButton from "../../../components/ui/button/customButton";
import { useContext } from "react";
import { CartContext } from "../../../provider/CartProvider";
import CustomTypography from "../../../components/ui/typography/customTypography";
import { useNavigate } from "react-router-dom";

const CartSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateCheckout = () => {
    navigate(`/checkout`);
  };
  const { cartItems, getCartTotal } = useContext(CartContext);
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
      {cartItems.length > 0 ? (
        <>
          {/* Render Cart Items */}
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
              <CartCard key={index} cartInfo={cartInfo} isEditable={true} />
            ))}
          </Box>

          {/* Render Total Boxes */}
          <Box sx={{ marginTop: "40px" }}>
            <PrizeBox
              backgroundColor="#f8f9fa"
              title="Cart Total"
              price={getCartTotal()}
            />
          </Box>

          {/* Checkout Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <CustomButton
              onClick={navigateCheckout}
              sx={{ width: "100%" }}
              text={"CheckOut"}
              backgroundColor={theme.palette.button.primary}
              padding={"12px 18px"}
            />
          </Box>
        </>
      ) : (
        // Show "Cart is Empty" message
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            marginTop: "40px",
          }}
        >
          <CustomTypography
            text={" Your cart is empty. Add items to see them here!"}
            align="center"
            sx={{
              fontWeight: "400",
              color: theme.palette.text.lightGrey,
              fontSize: {
                xs: "14px",
                sm: "18px",
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default CartSection;
