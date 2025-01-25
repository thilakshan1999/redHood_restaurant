import React, { useContext, useState } from "react";
import { Box, useTheme } from "@mui/material";
import CustomTypography from "../typography/customTypography";
import FoodDetailDialogBox from "../dialogBox/FoodDetailDialogBox";
import PropTypes from "prop-types";
import FoodInfo from "../../../models/foodInfo";
import CustomButton from "../button/customButton";
import { CartContext } from "../../../provider/CartProvider";

const FoodCard = ({ foodInfo }) => {
  const theme = useTheme();
  const { isInCart, addToCart } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCartAction = (event) => {
    event.stopPropagation();
    if (isInCart(foodInfo.id)) {
      // Optionally, navigate the user to the cart page or show a message
      // navigateToCart();
    } else {
      addToCart(foodInfo, 1);
    }
  };
  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transition: "transform 0.3s, box-shadow 0.3s",
          width: {
            xs: "45%",
            sm: "47.5%",
            md: "31%",
            lg: "23%",
          },
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={foodInfo.image}
          alt="Featured Food"
          sx={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 16px 16px 16px",
          }}
        >
          {/* Name */}
          <CustomTypography
            text={foodInfo.name}
            align="center"
            sx={{
              fontWeight: "600",
              color: theme.palette.text.black,
              fontSize: {
                xs: "12px",
                sm: "16px",
              },
            }}
          />

          {/* Category */}
          <CustomTypography
            text={foodInfo.category}
            align="center"
            sx={{
              fontWeight: "400",
              color: theme.palette.text.lightGrey,
              fontSize: {
                xs: "8px",
                sm: "12px",
              },
              textTransform: "uppercase",
            }}
          />

          {/* Price */}
          <CustomTypography
            text={`Rs ${parseFloat(foodInfo.price).toFixed(2)}`}
            align="center"
            sx={{
              fontWeight: "600",
              color: theme.palette.text.green,
              fontSize: "18px",
              marginTop: "5px",
            }}
          />

          {/* Add to Cart Button */}
          <CustomButton
            onClick={handleCartAction}
            text={isInCart(foodInfo.id) ? "Move to Cart" : "Add to Cart"}
            backgroundColor={
              isInCart(foodInfo.id)
                ? theme.palette.button.black
                : theme.palette.button.primary
            }
            padding={"5px 18px"}
          />
        </Box>
      </Box>
      {/* Modal */}
      <FoodDetailDialogBox
        open={open}
        handleClose={handleClose}
        food={foodInfo}
      />
    </>
  );
};

FoodCard.propTypes = {
  foodInfo: PropTypes.instanceOf(FoodInfo).isRequired,
};

export default FoodCard;
