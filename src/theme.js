// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8780f",
      dark: "#fe2f36",
    },
    secondary: {
      main: "#28a745",
    },
    text: {
      black: "#000000",
      white: "#ffffff",
      lightGrey: "#777777",
      darkGrey: "#4d4d4d",
      green: "#28a745",
    },
    button: {
      black: "#232529",
      primary: "#f8780f",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
