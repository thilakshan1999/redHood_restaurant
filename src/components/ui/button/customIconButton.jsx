import React from "react";
import IconButton from "@mui/material/IconButton";

const CustomIconButton = ({ icon, color, sx = {}, onClick }) => {
  return (
    <IconButton
      sx={{
        color: color,
      }}
      onClick={onClick}
    >
      {React.cloneElement(icon, { sx: sx })}
    </IconButton>
  );
};

export default CustomIconButton;
