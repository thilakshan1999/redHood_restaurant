import React from "react";
import PropTypes from "prop-types";
import { Box, useTheme } from "@mui/material";
import CustomTypography from "../typography/customTypography";
import { useNavigate } from "react-router-dom";
import CategoryInfo from "../../../models/categoryInfo";

const CategoryCard = ({ category }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateCategory = () => {
    navigate(`/category/${category.name}`);
  };
  return (
    <Box
      onClick={navigateCategory}
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
        src={category.image}
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
        text={category.name}
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
        text={category.type}
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

CategoryCard.propTypes = {
  category: PropTypes.instanceOf(CategoryInfo).isRequired,
};

export default CategoryCard;
