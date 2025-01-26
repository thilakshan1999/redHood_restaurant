import React from "react";
import { Box, useTheme } from "@mui/material";
import CustomTypography from "./typography/customTypography";

const PrizeBox = ({ backgroundColor, title, price }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: backgroundColor,
        padding: "10px 20px",
        borderRadius: "8px",
        marginTop: "10px",
      }}
    >
      <CustomTypography
        text={title}
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
      <CustomTypography
        text={`Rs ${parseFloat(price).toFixed(2)}`}
        align="center"
        sx={{
          fontWeight: "700",
          color: theme.palette.text.green,
          fontSize: {
            xs: "16px",
            sm: "20px",
          },
        }}
      />
    </Box>
  );
};

export default PrizeBox;
