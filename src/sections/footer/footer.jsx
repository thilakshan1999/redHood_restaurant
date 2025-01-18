import React from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #1976d2, #9c27b0)",
        color: "white",
        padding: "20px",
      }}
    >
      <Grid container spacing={4}>
        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            Contact Info
          </Typography>
          <Typography>Address: 123 Redhood Street</Typography>
          <Typography>Phone: +1 234 567 890</Typography>
          <Typography>Email: contact@redhood.com</Typography>
          <Typography>Website: www.redhoodrestaurant.com</Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: "10px" }}>
            <Link href="#" color="inherit">
              <Facebook />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
          </Box>
        </Grid>

        {/* About */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            About
          </Typography>
          <Typography>
            Redhood Restaurant is your one-stop destination for mouth-watering
            delicacies made with the freshest ingredients and authentic recipes.
            Join us for an unforgettable dining experience!
          </Typography>
        </Grid>

        {/* Food Categories */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            Food Categories
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Button variant="contained" color="secondary">
              Appetizers
            </Button>
            <Button variant="contained" color="secondary">
              Main Courses
            </Button>
            <Button variant="contained" color="secondary">
              Desserts
            </Button>
            <Button variant="contained" color="secondary">
              Beverages
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
