import { Grid, useTheme } from "@mui/material";
import FooterHeading from "../footerHeading";
import CustomTypography from "../../../components/ui/typography/customTypography";

const AboutSection = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12} md={5}>
      <FooterHeading tittleText={"About"} />

      <CustomTypography
        sx={{ fontSize: "14px" }}
        color={theme.palette.text.lightGrey}
        text={
          " Redhood Restaurant is your one-stop destination for mouth-watering" +
          " delicacies made with the freshest ingredients and authentic recipes." +
          "Join us for an unforgettable dining experience!"
        }
      />
    </Grid>
  );
};

export default AboutSection;
