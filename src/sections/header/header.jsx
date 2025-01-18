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
      <Toolbar>
        <CustomTypography
          text={"RedHood Restaurant"}
          variant="h5"
          color={theme.palette.text.white}
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        />

        {/* Right Section: Cart and Profile */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <CustomIconButton
            icon={<ShoppingBagOutlined />}
            color={theme.palette.text.white}
          />
          <CustomIconButton
            icon={<AccountCircleOutlined />}
            color={theme.palette.text.white}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
