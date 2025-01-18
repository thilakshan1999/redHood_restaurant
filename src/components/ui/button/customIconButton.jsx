import React from "react";
import IconButton from "@mui/material/IconButton";

const CustomIconButton = ({
  icon,
  color,
  fontSize = "28px",
  sx = {},
  onClick,
}) => {
  return (
    <IconButton
      sx={{
        color: color,
        ...sx,
      }}
      onClick={onClick}
    >
      {React.cloneElement(icon, { sx: { fontSize } })}
    </IconButton>
  );
};

export default CustomIconButton;
