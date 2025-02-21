import React, { useContext, useState } from "react";
import { AppBar, Toolbar, Box, useTheme } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
import CustomIconButton from "../../components/ui/button/customIconButton";
import { useNavigate } from "react-router-dom";
import CartIcon from "./cartIcon";
import { CartContext } from "../../provider/CartProvider";
import LoginDialogBox from "../../components/ui/dialogBox/loginDialogBox";
import SignUpDialogBox from "../../components/ui/dialogBox/signUpDialogBox";

const Header = () => {
  const theme = useTheme();
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const handleOpenDialog = () => setOpen(true); // Open the dialog

  return (
    <>
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
          <Box
            onClick={handleClick}
            sx={{
              cursor: "pointer", // Makes the text look clickable
              fontWeight: "bold",
              fontSize: {
                xs: "16px",
                sm: "20px",
                md: "24px",
              },
              color: theme.palette.text.white,
              flexGrow: 1,
            }}
          >
            RedHood Restaurant
          </Box>

          {/* Right Section: Cart and Profile */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <CartIcon cartCount={cartItems.length} />

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
              onClick={handleOpenDialog}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {/* Dialog for Login */}
      <LoginDialogBox open={open} setOpen={setOpen} />
      {/* <SignUpDialogBox open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default Header;
