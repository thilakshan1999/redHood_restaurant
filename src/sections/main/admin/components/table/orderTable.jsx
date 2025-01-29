import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CustomTypography from "../../../../../components/ui/typography/customTypography";
import { useContext } from "react";
import { OrderContext } from "../../../../../provider/OrderProvider";
import OrderTableHead from "./orderTableHead";
import OrderTableRow from "./orderTableRow";

export default function OrderTable() {
  const { orders } = useContext(OrderContext);
  const [activeTab, setActiveTab] = useState("pending");
  const [filteredOrders, setFilteredOrders] = useState([]);

  React.useEffect(() => {
    const ordersByTab = {
      pending: orders.filter((order) => order.status === "pending"),
      confirmed: orders.filter((order) => order.status === "confirmed"),
      shipped: orders.filter((order) => order.status === "shipped"),
      delivered: orders.filter((order) => order.status === "delivered"),
      cancelled: orders.filter((order) => order.status === "cancelled"),
    };
    setFilteredOrders(ordersByTab[activeTab]);
  }, [orders, activeTab]);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  const theme = useTheme();
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        padding: {
          xs: "40px 20px ",
          md: "40px 40px",
        },
        margin: "auto",
      }}
    >
      <CustomTypography
        text="All orders"
        align="left"
        sx={{
          fontWeight: "600",
          color: theme.palette.text.black,
          fontSize: "24px",
          marginBottom: "30px",
        }}
      />
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid",
          borderColor: "grey.100",
        }}
      >
        {/* Tabs Section */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            marginLeft: "10px",
            "& .MuiTabs-indicator": {
              height: "3px", // Thicker indicator
              borderRadius: "3px", // Rounded indicator edges
            },
            "& .MuiTab-root": {
              fontSize: "14px", // Adjust font size
              fontWeight: "bold", // Adjust font weight
            },
          }}
        >
          <Tab label="Pending Orders" value="pending" />
          <Tab label="Confirmed Orders" value="confirmed" />
          <Tab label="Shipped Orders" value="shipped" />
          <Tab label="Delivered Orders" value="delivered" />
          <Tab label="Canceled Orders" value="cancelled" />
        </Tabs>
        <Table
          aria-label="collapsible table"
          sx={{
            minWidth: "600px",
            "& .MuiTableCell-root": {
              borderColor: "grey.100",
              borderWidth: "1px",
            },
            "& .MuiTableHead-root": {
              backgroundColor: "grey.100",
            },
          }}
        >
          <OrderTableHead />
          <TableBody>
            {filteredOrders.map((orderInfo) => (
              <OrderTableRow key={orderInfo.orderId} orderInfo={orderInfo} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
