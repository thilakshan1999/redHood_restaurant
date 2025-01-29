import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import FooterHeading from "../footerHeading";
import FooterFoodCategoriesBtn from "./footerFoodCategoriesBtn";
import CategoryApi from "../../../api/category";

const FooterFoodCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await CategoryApi.getCategoryName();
      if (data) {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);
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
        {categories.map((category, index) => (
          <FooterFoodCategoriesBtn
            key={category.id}
            categoryName={category.name}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default FooterFoodCategories;
