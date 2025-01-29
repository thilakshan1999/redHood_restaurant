import { Box } from "@mui/material";
import ContentHeading from "../../../../components/ui/heading/contentHeading";
import FoodCard from "../../../../components/ui/card/foodCard";
import { useEffect, useState } from "react";
import FoodApi from "../../../../api/food";
import FoodCardSkeleton from "../../../../components/ui/skelton/FoodCardSkelton";

const HomeFeatureFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await FoodApi.getFeaturedFoods();
        if (data) {
          setFeaturedFoods(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
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
      <ContentHeading tittle={"Featured Foods"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 3,
          marginTop: "40px",
        }}
      >
        {loading
          ? [...Array(6)].map((_, index) => <FoodCardSkeleton key={index} />)
          : featuredFoods.map((food, index) => (
              <FoodCard key={index} foodInfo={food} />
            ))}
      </Box>
    </Box>
  );
};
export default HomeFeatureFoods;
