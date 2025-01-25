// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8780f",
      dark: "#fe2f36",
    },
    secondary: {
      main: "#9c27b0",
    },
    text: {
      black: "#000000",
      white: "#ffffff",
      lightGrey: "#777777",
      darkGrey: "#4d4d4d",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
