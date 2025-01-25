import { Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomTypography from "../../../components/ui/typography/customTypography";

const FooterFoodCategoriesBtn = ({ categoryName }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateCategory = () => {
    navigate(`/category/${categoryName}`);
  };
  return (
    <Button
      variant="outlined"
      onClick={navigateCategory}
      sx={{
        borderColor: `${theme.palette.text.darkGrey} !important`,
        backgroundColor: "transparent !important",
        color: theme.palette.text.lightGrey,
        "&:hover": {
          backgroundColor: "transparent !important",
          borderColor: `${theme.palette.text.white} !important`,
          color: theme.palette.text.white,
        },
      }}
    >
      <CustomTypography
        sx={{ fontSize: "12px", textTransform: "none" }}
        // color={theme.palette.text.lightGrey}
        text={categoryName}
      />
    </Button>
  );
};
export default FooterFoodCategoriesBtn;
