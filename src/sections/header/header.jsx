import React from "react";
import { AppBar, Toolbar, Box, useTheme } from "@mui/material";
import {
  ShoppingBagOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import CustomTypography from "../../components/ui/typography/customTypography";
import CustomIconButton from "../../components/ui/button/customIconButton";

const Header = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        background: `linear-gradient(90deg,${theme.palette.primary.dark},${theme.palette.primary.main})`,
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          width: "90%",
          padding: "0px 20px",
        }}
      >
        <CustomTypography
          text={"RedHood Restaurant"}
          color={theme.palette.text.white}
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: {
              xs: "16px",
              sm: "20px",
              md: "24px",
            },
          }}
        />

        {/* Right Section: Cart and Profile */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <CustomIconButton
            icon={<ShoppingBagOutlined />}
            color={theme.palette.text.white}
            sx={{
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "32px",
              },
            }}
          />
          <CustomIconButton
            icon={<AccountCircleOutlined />}
            color={theme.palette.text.white}
            sx={{
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "32px",
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
