import {
  AppBar,
  Box,
  Toolbar,
  useTheme,
  Avatar,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import AdminProfileMenu from "./adminProfileMenu";

const AdminHeader = ({ email = "redhood@example.com" }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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
        <Box
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

        {/* Profile */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
            <Avatar
              sx={{
                bgcolor: "grey.300",
                color: "grey.600",
                width: {
                  xs: 32,
                  sm: 40,
                },
                height: {
                  xs: 32,
                  sm: 40,
                },
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                },
              }}
            >
              {email[0].toUpperCase()}
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>

      <AdminProfileMenu
        email={email}
        anchorEl={anchorEl}
        handleCloseMenu={handleCloseMenu}
      />
    </AppBar>
  );
};
export default AdminHeader;
