import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const FoodCardSkeleton = () => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        width: {
          xs: "45%",
          sm: "47.5%",
          md: "31%",
          lg: "23%",
        },
      }}
    >
      {/* Image Skeleton */}
      <Skeleton variant="rectangular" width="100%" height="150px" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 16px 16px 16px",
        }}
      >
        {/* Name Skeleton */}
        <Skeleton
          variant="text"
          width="60%"
          height={20}
          sx={{ marginBottom: "8px" }}
        />

        {/* Category Skeleton */}
        <Skeleton
          variant="text"
          width="40%"
          height={16}
          sx={{ marginBottom: "8px" }}
        />

        {/* Price Skeleton */}
        <Skeleton
          variant="text"
          width="50%"
          height={20}
          sx={{ marginBottom: "8px" }}
        />

        {/* Add to Cart Button Skeleton */}
        <Skeleton
          variant="rectangular"
          width="80%"
          height={36}
          sx={{ borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
};

export default FoodCardSkeleton;
