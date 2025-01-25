import { Box, Grid } from "@mui/material";
import FooterHeading from "../footerHeading";
import FooterFoodCategoriesBtn from "./footerFoodCategoriesBtn";

const FooterFoodCategories = () => {
  const categories = [
    "Appetizers",
    "Main Course",
    "Desserts",
    "Beverages",
    "Snacks",
    "Salads",
  ];
  return (
    <Grid item xs={12} md={4}>
      <FooterHeading tittleText={"Food Categories"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {categories.map((categoryName, index) => (
          <FooterFoodCategoriesBtn key={index} categoryName={categoryName} />
        ))}
      </Box>
    </Grid>
  );
};

export default FooterFoodCategories;
