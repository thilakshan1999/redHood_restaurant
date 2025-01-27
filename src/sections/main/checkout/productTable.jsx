import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from "@mui/material";
import CustomTypography from "../../../components/ui/typography/customTypography";

const ProductTable = ({ products }) => {
  const theme = useTheme();
  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <CustomTypography
        text={"Receipt"}
        align="left"
        sx={{
          fontWeight: "600",
          color: theme.palette.text.black,
          fontSize: {
            xs: "12px",
            sm: "16px",
          },
          padding: "16px",
        }}
      />

      <Table sx={{ minWidth: 300 }} aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Product Name
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Unit Price
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Quantity
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Prize
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.foodName}>
              <TableCell align="left">{product.foodName}</TableCell>
              <TableCell align="left">Rs {product.prize.toFixed(2)}</TableCell>
              <TableCell align="left">{product.quantity}</TableCell>
              <TableCell align="left">
                Rs {(product.prize * product.quantity).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
