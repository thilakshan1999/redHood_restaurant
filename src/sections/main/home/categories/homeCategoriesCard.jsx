import React from "react";
import { Box, useTheme } from "@mui/material";
import CustomTypography from "../../../../components/ui/typography/customTypography";

const HomeCategoryCard = ({ image, name, type }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        alignItems: "center",
        width: {
          xs: "28%",
          sm: "30%",
          md: "13.75%",
          lg: "14.5%",
        },
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt="Featured Food"
        sx={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

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
          textTransform: "uppercase",
        }}
      />

      {/* Category */}
      <CustomTypography
        text={type}
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
    </Box>
  );
};

export default HomeCategoryCard;
