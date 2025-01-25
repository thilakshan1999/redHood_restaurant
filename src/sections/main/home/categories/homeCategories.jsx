import { Box } from "@mui/material";
import FeaturedFoodsImg from "../../../../assets/images/featuredFood/Briyani.jpg";
import HomeCategoryCard from "./homeCategoriesCard";
import ContentHeading from "../../../../components/ui/heading/contentHeading";

const categoryList = [
  {
    image: FeaturedFoodsImg,
    name: "Biriyanies",
    type: "Main Course",
  },
  {
    image: FeaturedFoodsImg,
    name: "Kottu",
    type: "Main Course",
  },
  {
    image: FeaturedFoodsImg,
    name: "Soft Drinks",
    type: "Beverages",
  },
  {
    image: FeaturedFoodsImg,
    name: "Rice & Curry",
    type: "Main Course",
  },
];

const HomeCategories = () => {
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
      <ContentHeading tittle={"Categories"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 3,
          marginTop: "40px",
        }}
      >
        {categoryList.map((category, index) => (
          <HomeCategoryCard
            key={index}
            image={category.image}
            name={category.name}
            type={category.type}
          />
        ))}
      </Box>
    </Box>
  );
};
export default HomeCategories;
