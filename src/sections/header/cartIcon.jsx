import { Badge } from "@mui/material";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import CustomIconButton from "../../components/ui/button/customIconButton";
import { useTheme } from "@emotion/react";

const CartIcon = ({ cartCount }) => {
  const theme = useTheme();
  return (
    <Badge
      badgeContent={cartCount}
      color="secondary"
      sx={{
        "& .MuiBadge-badge": {
          right: 10,
          top: 10,
          backgroundColor: "red",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
        },
      }}
    >
      <CustomIconButton
        icon={<ShoppingBagOutlined />}
        color={theme.palette.text.white}
        sx={{
          fontSize: {
            xs: "24px",
            sm: "28px",
            md: "32px",
          },
        }}
      />
    </Badge>
  );
};

export default CartIcon;
