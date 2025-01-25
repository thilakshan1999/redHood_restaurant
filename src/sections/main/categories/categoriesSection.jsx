import { Box } from "@mui/material";

import FeaturedFoodsImg from "../../../assets/images/featuredFood/Briyani.jpg";
import FeaturedFoodsCard from "../home/featuredFoods/featuredFoodsCard";
import ContentHeading from "../../../components/ui/heading/contentHeading";

const foodList = [
  {
    image: FeaturedFoodsImg,
    name: "Chicken Lamprais",
    category: "Rice & Curry",
    price: "Rs. 950.00",
  },
  {
    image: FeaturedFoodsImg,
    name: "Spaghetti Carbonara",
    category: "Pasta",
    price: "Rs. 850.00",
  },
  {
    image: FeaturedFoodsImg,
    name: "Grilled Chicken",
    category: "Grill",
    price: "Rs. 1100.00",
  },
  {
    image: FeaturedFoodsImg,
    name: "Vegetable Burger",
    category: "Fast Food",
    price: "Rs. 650.00",
  },
];

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
          <FeaturedFoodsCard
            key={index}
            image={food.image}
            name={food.name}
            category={food.category}
            prize={food.price}
          />
        ))}
      </Box>
    </Box>
  );
};
export default CategoriesSection;
