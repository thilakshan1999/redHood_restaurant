import React, { useState } from "react";
import { Box, Button, Modal, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomTypography from "../../../../components/ui/typography/customTypography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const FeaturedFoodDialogBox = ({ open, handleClose, food }) => {
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
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          width: {
            xs: "90%",
            sm: "70%",
            md: "40%",
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
            text="Hello world how are you?"
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
              marginBottom: "16px",
            }}
          >
            {/* Price */}
            <CustomTypography
              text={`Rs ${food.prize * count}`}
              align="center"
              sx={{
                fontWeight: "600",
                color: theme.palette.text.black,
                fontSize: "20px",
              }}
            />

            {/* Counter */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconButton
                onClick={handleDecrement}
                sx={{
                  color: "red",
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1">{count}</Typography>
              {/* Increment Button */}
              <IconButton
                onClick={handleIncrement}
                sx={{
                  color: "green",
                }}
              >
                <AddIcon />
              </IconButton>
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
            <Button
              variant="contained"
              sx={{
                flex: 1,
                borderRadius: "8px",
                fontWeight: "bold",
                padding: "10px 18px",
                backgroundColor: "#232529",
                color: theme.palette.text.white,
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                },
                textTransform: "uppercase",
              }}
            >
              Order Now
            </Button>
            <Button
              variant="contained"
              sx={{
                flex: 1,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.white,
                fontWeight: "bold",
                padding: "10px 18px",
                textTransform: "uppercase",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                },
                borderRadius: "8px",
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default FeaturedFoodDialogBox;
