import React from "react";
import { Box, Grid } from "@mui/material";
import AboutSection from "./about/aboutSection";
import ContactInfo from "./contactInfo/contactInfo";
import FooterFoodCategories from "./foodCategories/footerFoodCategories";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#232529",
        padding: {
          xs: "40px 20px ",
          md: "40px 40px",
        },
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: "1200px", mx: "auto" }}>
        <ContactInfo />
        <AboutSection />
        <FooterFoodCategories />
      </Grid>
    </Box>
  );
};

export default Footer;
