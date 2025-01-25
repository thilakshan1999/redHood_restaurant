import { Box, Divider, useTheme } from "@mui/material";
import CustomTypography from "../typography/customTypography";
const ContentHeading = ({ tittle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Divider
        sx={{
          position: "relative",
          "&::before, &::after": {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            px: 2,
          }}
        >
          <CustomTypography
            text={tittle}
            align="center"
            sx={{
              fontWeight: "600",
              color: theme.palette.text.black,
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          />
        </Box>
      </Divider>
    </Box>
  );
};
export default ContentHeading;
