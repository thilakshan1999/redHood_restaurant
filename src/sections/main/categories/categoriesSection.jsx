import { Box } from "@mui/material";

import ContentHeading from "../../../components/ui/heading/contentHeading";
import FoodCard from "../../../components/ui/card/foodCard";
import { foodList } from "../../../models/foodInfo";

const CategoriesSection = ({ name }) => {
  return (
    <Box
      container
      spacing={2}
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        padding: {
          xs: "40px 20px ",
          md: "40px 40px",
        },
      }}
    >
      <ContentHeading tittle={name} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 3,
          marginTop: "40px",
        }}
      >
        {foodList.map((food, index) => (
          <FoodCard key={index} foodInfo={food} />
        ))}
      </Box>
    </Box>
  );
};
export default CategoriesSection;
