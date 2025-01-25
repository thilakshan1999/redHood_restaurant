import { Box, Grid, useTheme } from "@mui/material";
import CustomTypography from "../../../../components/ui/typography/customTypography";

const PromotionMsg = ({ heading, subheading, msg, Icon }) => {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Icon */}
      <Box>
        {Icon && (
          <Icon style={{ color: theme.palette.primary.main, fontSize: 54 }} />
        )}
      </Box>

      {/* Text Section */}
      <Box>
        {/* Heading */}
        <CustomTypography
          align="center"
          text={heading}
          sx={{
            fontWeight: "700",
            color: theme.palette.text.black,
            fontSize: "15px",
            textTransform: "uppercase",
            marginTop: "15px",
          }}
        />
        {/* Subheading */}
        <CustomTypography
          align="center"
          text={subheading}
          sx={{
            color: theme.palette.text.darkGrey,
            fontWeight: "600",
            fontSize: "14px",
          }}
        />

        {/* Body Text */}
        <CustomTypography
          align="center"
          text={msg}
          sx={{
            color: theme.palette.text.lightGrey,
            fontSize: "14px",
            maxWidth: "260px",
            marginTop: "15px",
          }}
        />
      </Box>
    </Grid>
  );
};

export default PromotionMsg;
