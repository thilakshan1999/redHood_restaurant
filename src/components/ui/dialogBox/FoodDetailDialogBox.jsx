import React, { useContext, useState } from "react";
import { Box, Fade, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomTypography from "../typography/customTypography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import FoodInfo from "../../../models/foodInfo";
import CustomIconButton from "../button/customIconButton";
import CustomButton from "../button/customButton";
import { CartContext } from "../../../provider/CartProvider";
import { useNavigate } from "react-router-dom";

const FoodDetailDialogBox = ({ open, handleClose, food }) => {
  const { addToCart, isInCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateCart = () => {
    navigate(`/cart`);
  };
  const [count, setCount] = useState(1);
  const theme = useTheme();

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            width: {
              xs: "90%",
              sm: "400px",
            },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={food.image}
              alt={food.name}
              sx={{
                width: "100%",
                maxHeight: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "16px",
              }}
            />

            {/* Tittle */}
            <CustomTypography
              text={food.name}
              align="center"
              sx={{
                fontWeight: "600",
                color: theme.palette.text.black,
                fontSize: "24px",
              }}
            />

            {/* Description */}
            <CustomTypography
              text={food.description}
              align="center"
              sx={{
                fontWeight: "500",
                color: theme.palette.text.lightGrey,
                fontSize: "16px",
              }}
            />

            {/* Price and Counter */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "95%",
                marginTop: "10px",
                marginBottom: "16px",
              }}
            >
              {/* Price */}
              <CustomTypography
                text={`Rs ${(food.price * count).toFixed(2)}`}
                align="center"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.text.green,
                  fontSize: "20px",
                }}
              />

              {/* Counter */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {/* Decrement Button */}
                <CustomIconButton
                  icon={RemoveIcon}
                  color={"red"}
                  onClick={handleDecrement}
                />

                <CustomTypography
                  text={count}
                  align="center"
                  sx={{
                    fontWeight: "400",
                    color: theme.palette.text.darkGrey,
                    fontSize: "18px",
                  }}
                />

                {/* Increment Button */}
                <CustomIconButton
                  icon={AddIcon}
                  color={"green"}
                  onClick={handleIncrement}
                />
              </Box>
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                width: "100%",
              }}
            >
              <CustomButton
                onClick={() => {
                  if (isInCart(food.id)) {
                    removeFromCart(food.id);
                  } else {
                    addToCart(food, count);
                    navigateCart();
                  }
                  handleClose();
                }}
                text={isInCart(food.id) ? "Remove" : "Order Now"}
                backgroundColor={
                  isInCart(food.id)
                    ? theme.palette.button.red
                    : theme.palette.button.black
                }
                padding={"10px 18px"}
                sx={{ flex: 1 }}
              />

              <CustomButton
                onClick={() => {
                  addToCart(food, count);
                  handleClose();
                }}
                text={isInCart(food.id) ? "Update Cart" : "Add to Cart"}
                backgroundColor={theme.palette.button.primary}
                padding={"10px 18px"}
                sx={{ flex: 1 }}
              />
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

FoodDetailDialogBox.propTypes = {
  food: PropTypes.instanceOf(FoodInfo).isRequired,
};

export default FoodDetailDialogBox;
