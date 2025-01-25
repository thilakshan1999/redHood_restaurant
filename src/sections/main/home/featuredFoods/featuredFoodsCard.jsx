import React, { useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import CustomTypography from "../../../../components/ui/typography/customTypography";
import FeaturedFoodDialogBox from "./featureFoodDialogBox";

const FeaturedFoodsCard = ({ image, name, category, prize }) => {
  const theme = useTheme();
  const dummyPrize = 50;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          src={image}
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
            text={name}
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
            text={category}
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
            text={prize}
            align="center"
            sx={{
              fontWeight: "600",
              color: theme.palette.text.black,
              fontSize: "18px",
              marginTop: "5px",
            }}
          />

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.white,
              fontWeight: "bold",
              padding: "5px 18px",
              textTransform: "uppercase",
              fontSize: {
                xs: "10px",
                sm: "14px",
              },
              borderRadius: "8px",
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
      {/* Modal */}
      <FeaturedFoodDialogBox
        open={open}
        handleClose={handleClose}
        food={{ image, name, dummyPrize }}
      />
    </>
  );
};

export default FeaturedFoodsCard;
