import { Button, useTheme } from "@mui/material";

const CustomButton = ({ text, backgroundColor, padding, sx = {} }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: backgroundColor,
        color: theme.palette.text.white,
        fontWeight: "bold",
        padding: padding,
        textTransform: "uppercase",
        fontSize: {
          xs: "10px",
          sm: "14px",
        },
        fontFamily: theme.typography.fontFamily,
        borderRadius: "8px",
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};
export default CustomButton;
