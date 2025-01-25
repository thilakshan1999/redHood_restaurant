import { Box, useTheme } from "@mui/material";
import CustomTypography from "../../../components/ui/typography/customTypography";

const ContactInfoDetails = ({ tittle, description }) => {
  const theme = useTheme();
  return (
    <Box>
      <CustomTypography
        sx={{ fontSize: "14px", textTransform: "uppercase" }}
        color={theme.palette.text.white}
        text={tittle}
      />
      <CustomTypography
        sx={{ fontSize: "14px", marginBottom: "10px" }}
        color={theme.palette.text.lightGrey}
        text={description}
      />
    </Box>
  );
};
export default ContactInfoDetails;
