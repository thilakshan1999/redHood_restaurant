import { Box } from "@mui/material";
import CategoryCard from "../../../../components/ui/card/categoriesCard";
import ContentHeading from "../../../../components/ui/heading/contentHeading";
import { categorySampleList } from "../../../../models/categoryInfo";

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
        {categorySampleList.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </Box>
    </Box>
  );
};
export default HomeCategories;
