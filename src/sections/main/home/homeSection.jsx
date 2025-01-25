import { Box } from "@mui/material";
import Promotion from "./promotion/promotion";
import Banner from "./banner/banner";
import HomeFeatureFoods from "./featuredFoods/homeFeaturedFoods";
import HomeCategories from "./categories/homeCategories";

const HomeSection = () => {
  return (
    <Box>
      <Banner />
      <HomeCategories />
      <HomeFeatureFoods />
      <Promotion />
    </Box>
  );
};
export default HomeSection;
