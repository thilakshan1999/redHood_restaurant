import { useTheme } from "@emotion/react";
import { Icon, Menu, MenuItem } from "@mui/material";
import { CheckCircle, Cancel, Visibility } from "@mui/icons-material";
import CustomTypography from "../../../../../components/ui/typography/customTypography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useContext } from "react";
import { OrderContext } from "../../../../../provider/OrderProvider";
const MenuItemComponent = ({ color, icon, text, onClick }) => {
  return (
    <MenuItem
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        margin: "0px 8px",
        borderRadius: "8px", // Corner radius
        color: color,
      }}
    >
      <Icon size="small" sx={{ marginRight: 2, paddingBottom: "4px" }}>
        {icon}
      </Icon>
      <CustomTypography
        text={text}
        align="left"
        sx={{
          fontWeight: "500",
          color: color,
          fontSize: "16px",
        }}
      />
    </MenuItem>
  );
};

const OrderTableItemMenu = ({ menuAnchorEl, setMenuAnchorEl, orderInfo }) => {
  const theme = useTheme();
  const { updateOrderStatus } = useContext(OrderContext);
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const getMenuItems = (status) => {
    switch (status) {
      case "pending":
        return [
          <MenuItemComponent
            key="pending_view"
            icon={<Visibility />}
            text="View"
            onClick={() => {
              handleMenuClose();
            }}
          />,
          <MenuItemComponent
            key="pending_confirm"
            color="#4CAF50"
            icon={<CheckCircle />}
            text="Confirm"
            onClick={() => {
              updateOrderStatus(orderInfo.orderId, "confirmed");
              handleMenuClose();
            }}
          />,
          <MenuItemComponent
            key="pending_cancel"
            color="#F44336"
            icon={<Cancel />}
            text="Cancel"
            onClick={() => {
              updateOrderStatus(orderInfo.orderId, "cancelled");
              handleMenuClose();
            }}
          />,
        ];
      case "confirmed":
        return [
          <MenuItemComponent
            key="confirmed_view"
            icon={<Visibility />}
            text="View"
            onClick={() => handleMenuClose()}
          />,
          <MenuItemComponent
            key="confirmed_shipped"
            color="#4CAF50"
            icon={<LocalShippingIcon />}
            text="Shipped"
            onClick={() => {
              updateOrderStatus(orderInfo.orderId, "shipped");
              handleMenuClose();
            }}
          />,
          <MenuItemComponent
            key="confirmed_cancel"
            color="#F44336"
            icon={<Cancel />}
            text="Cancel"
            onClick={() => {
              updateOrderStatus(orderInfo.orderId, "cancelled");
              handleMenuClose();
            }}
          />,
        ];
      case "shipped":
        return [
          <MenuItemComponent
            key="shipped_view"
            icon={<Visibility />}
            text="View"
            onClick={() => handleMenuClose()}
          />,
          <MenuItemComponent
            key="shipped_delivered"
            color="#4CAF50" // Green for delivered
            icon={<LocalMallIcon />}
            text="Delivered"
            onClick={() => {
              updateOrderStatus(orderInfo.orderId, "delivered");
              handleMenuClose();
            }}
          />,
        ];
      case "delivered":
      case "cancelled":
        return [
          <MenuItemComponent
            key="cancelled_view"
            icon={<Visibility />}
            text="View"
            onClick={() => handleMenuClose()}
          />,
        ];
      default:
        return null;
    }
  };

  return (
    <Menu
      key={orderInfo.status}
      anchorEl={menuAnchorEl}
      open={Boolean(menuAnchorEl)}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        "& .MuiPaper-root": {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          border: `1px solid ${theme.palette.grey[300]}`,
        },
      }}
    >
      {getMenuItems(orderInfo.status)}
    </Menu>
  );
};
export default OrderTableItemMenu;
