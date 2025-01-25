import { Box, Grid } from "@mui/material";

const BannerImg = ({ BackgroundImg }) => {
  return (
    <Box paddingInline="10px">
      <Box
        component={"img"}
        src={BackgroundImg}
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};
export default BannerImg;
