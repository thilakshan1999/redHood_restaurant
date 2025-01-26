import { Badge } from "@mui/material";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import CustomIconButton from "../../components/ui/button/customIconButton";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const CartIcon = ({ cartCount }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateCart = () => {
    navigate(`/cart`);
  };

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
        onClick={navigateCart}
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
