import { Box, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PromotionMsg from "./promotionMsg";

const Promotion = () => {
  return (
    <Box
      sx={{
        background: "#f6f7f9",
        padding: {
          xs: "80px 20px ",
          md: "80px 40px",
        },
        marginTop: "80px",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: "1200px", mx: "auto" }}>
        <PromotionMsg
          heading={"Quick Delivery"}
          subheading={"At a very low cost"}
          msg={
            "We ensure to bring your orders to your home as early as possible for you to enjoy the freshness."
          }
          Icon={AccessTimeIcon}
        />
        <PromotionMsg
          heading={"Customer Support"}
          subheading={"Can us anytime you want"}
          msg={
            "Customer support is one thing that we value a lot. Can us for any questions/concerns/issues any time."
          }
          Icon={SupportAgentIcon}
        />
        <PromotionMsg
          heading={"Cash on Delivery"}
          subheading={"No need to pay anything in advance"}
          msg={
            "You may pay the billed amount to the delivery person once you receive the order."
          }
          Icon={MonetizationOnIcon}
        />
      </Grid>
    </Box>
  );
};
export default Promotion;
