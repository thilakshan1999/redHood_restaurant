import React, { useContext, useState } from "react";
import { Box, useTheme } from "@mui/material";
import CustomTypography from "../typography/customTypography";
import PropTypes from "prop-types";
import CustomButton from "../button/customButton";
import { CartContext } from "../../../provider/CartProvider";
import CustomIconButton from "../button/customIconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CartInfo from "../../../models/cartInfo";

const CartCard = ({ cartInfo, isEditable }) => {
  const theme = useTheme();

  const { removeFromCart, addToCart } = useContext(CartContext);

  const handleCartAction = () => {
    removeFromCart(cartInfo.foodInfo.id);
  };

  const [count, setCount] = useState(cartInfo.count);
  const handleIncrement = () => {
    addToCart(cartInfo.foodInfo, count + 1);
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      addToCart(cartInfo.foodInfo, count - 1);
      setCount(count - 1);
    }
  };

  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transition: "transform 0.3s, box-shadow 0.3s",
          width: {
            xs: "100%",
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
          src={cartInfo.foodInfo.image}
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
            text={cartInfo.foodInfo.name}
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
            text={cartInfo.foodInfo.category}
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
          {isEditable ? (
            <>
              {/* Price and Counter */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "95%",
                }}
              >
                {/* Price */}
                <CustomTypography
                  text={`Rs ${(cartInfo.foodInfo.price * count).toFixed(2)}`}
                  align="center"
                  sx={{
                    fontWeight: "600",
                    color: theme.palette.text.green,
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                    },
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
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                      },
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

              {/* Remove from Cart Button */}
              <CustomButton
                onClick={handleCartAction}
                text={"Remove"}
                backgroundColor={theme.palette.button.red}
                padding={"5px 18px"}
              />
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "95%",
              }}
            >
              {/* Price */}
              <CustomTypography
                text={`Rs ${cartInfo.foodInfo.price.toFixed(2)} x ${
                  cartInfo.count
                }`}
                align="center"
                sx={{
                  fontWeight: "400",
                  color: theme.palette.text.lightGrey,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                }}
              />

              <CustomTypography
                text={`Rs ${(cartInfo.foodInfo.price * count).toFixed(2)}`}
                align="center"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.text.green,
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                  },
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

CartCard.propTypes = {
  cartInfo: PropTypes.instanceOf(CartInfo).isRequired,
};

export default CartCard;
