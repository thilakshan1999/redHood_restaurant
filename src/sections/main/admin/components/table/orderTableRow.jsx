import { useTheme } from "@emotion/react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomTypography from "../../../../../components/ui/typography/customTypography";
import OrderTableItemMenu from "./orderTableItemMenu";

const OrderTableRow = ({ orderInfo }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left" sx={{ width: "20%" }}>
          {orderInfo.orderId}
        </TableCell>
        <TableCell align="left" sx={{ width: "30%" }}>
          {orderInfo.customerName}
        </TableCell>
        <TableCell align="left" sx={{ width: "20%" }}>
          {orderInfo.orderOn}{" "}
        </TableCell>
        <TableCell align="left" sx={{ width: "8%" }}>
          {orderInfo.itemsCount}
        </TableCell>
        <TableCell align="left" sx={{ width: "12%" }}>
          Rs {orderInfo.price.toFixed(2)}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <IconButton aria-label="menu" size="small" onClick={handleMenuClick}>
            <MoreVert />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <CustomTypography
                text="Order Info"
                align="left"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.text.lightGrey,
                  fontSize: "16px",
                  margin: "5px",
                }}
              />
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.lightGrey,
                      }}
                    >
                      Food
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.lightGrey,
                      }}
                    >
                      Unit Prize
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.lightGrey,
                      }}
                    >
                      Quantity
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.lightGrey,
                      }}
                    >
                      Total price
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderInfo.foodList.map((foodInfo) => (
                    <TableRow key={foodInfo.foodName}>
                      <TableCell component="th" scope="row">
                        {foodInfo.foodName}
                      </TableCell>
                      <TableCell align="right">
                        {" "}
                        Rs {foodInfo.prize.toFixed(2)}
                      </TableCell>
                      <TableCell align="right">{foodInfo.quantity}</TableCell>
                      <TableCell align="right">
                        Rs{(foodInfo.prize * foodInfo.quantity).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <OrderTableItemMenu
        menuAnchorEl={menuAnchorEl}
        setMenuAnchorEl={setMenuAnchorEl}
        orderInfo={orderInfo}
      />
    </>
  );
};
export default OrderTableRow;
