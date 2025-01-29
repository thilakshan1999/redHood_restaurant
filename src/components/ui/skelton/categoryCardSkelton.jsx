import { Box, Skeleton } from "@mui/material";

const CategoryCardSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        alignItems: "center",
        width: {
          xs: "28%",
          sm: "30%",
          md: "13.75%",
          lg: "14.5%",
        },
      }}
    >
      {/* Skeleton for Image */}
      <Skeleton
        variant="circular"
        width={100}
        height={100}
        sx={{ marginBottom: "15px" }}
      />

      {/* Skeleton for Name */}
      <Skeleton
        variant="text"
        width="80%"
        height={20}
        sx={{
          marginBottom: "8px",
          textAlign: "center",
          fontWeight: "600",
          fontSize: {
            xs: "12px",
            sm: "16px",
          },
        }}
      />

      {/* Skeleton for Category Type */}
      <Skeleton
        variant="text"
        width="60%"
        height={15}
        sx={{
          textAlign: "center",
          fontWeight: "400",
          fontSize: {
            xs: "8px",
            sm: "12px",
          },
        }}
      />
    </Box>
  );
};

export default CategoryCardSkeleton;
