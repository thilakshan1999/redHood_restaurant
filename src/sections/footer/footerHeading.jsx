import { useTheme } from "@emotion/react";
import CustomTypography from "../../components/ui/typography/customTypography";

const FooterHeading = ({ tittleText }) => {
  const theme = useTheme();
  return (
    <CustomTypography
      color={theme.palette.text.white}
      text={tittleText}
      sx={{
        marginBottom: "10px",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    />
  );
};
export default FooterHeading;
