import { Box } from "@mui/material";
import CategoryCard from "../../../../components/ui/card/categoriesCard";
import ContentHeading from "../../../../components/ui/heading/contentHeading";
import { useEffect, useState } from "react";
import CategoryApi from "../../../../api/category";
import CategoryCardSkeleton from "../../../../components/ui/skelton/categoryCardSkelton";

const HomeCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await CategoryApi.getCategories();
        if (data) {
          setCategories(data);
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
        {loading
          ? // ✅ Skeleton Effect while Loading
            [...Array(6)].map((_, index) => (
              <CategoryCardSkeleton key={index} />
            ))
          : // ✅ Actual Categories after Loading
            categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
      </Box>
    </Box>
  );
};
export default HomeCategories;
