import React from "react";
import { Modal, Fade, Box, useTheme, IconButton } from "@mui/material";
import ProductTable from "../../../checkout/productTable";
import CloseIcon from "@mui/icons-material/Close";
import CustomTypography from "../../../../../components/ui/typography/customTypography";

const OrderViewDialogBox = ({ open, onClose, orderInfo }) => {
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            width: {
              xs: "calc(90% - 40px)",
              sm: "500px",
            },
            padding: "40px 30px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: theme.palette.text.black,
            }}
          >
            <CloseIcon />
          </IconButton>
          <CustomTypography
            text={orderInfo.orderId}
            align="center"
            sx={{
              fontWeight: "600",
              color: theme.palette.text.black,
              fontSize: {
                xs: "14px",
                sm: "16px",
              },
            }}
          />
          <CustomTypography
            text={orderInfo.orderOn}
            align="center"
            sx={{
              fontWeight: "500",
              color: theme.palette.text.lightGrey,
              fontSize: {
                xs: "12px",
                sm: "14px",
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "20px",
            }}
          >
            {/* Order Info */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "10px",
              }}
            >
              <CustomTypography
                text={"Order Type"}
                align="left"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.text.black,
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                  },
                }}
              />
              <CustomTypography
                text={
                  orderInfo.orderType
                    ? orderInfo.orderType
                        .replace("_", " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())
                    : "N/A"
                }
                align="left"
                sx={{
                  fontWeight: "500",
                  color: theme.palette.text.black,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                }}
              />

              <CustomTypography
                text={"Order Status"}
                align="left"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.text.black,
                  marginTop: "10px",
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                  },
                }}
              />
              <CustomTypography
                text={orderInfo.status.replace(/\b\w/g, (char) =>
                  char.toUpperCase()
                )}
                align="left"
                sx={{
                  fontWeight: "500",
                  color: theme.palette.text.black,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                }}
              />

              <CustomTypography
                text={"Payment Method"}
                align="left"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.text.black,
                  marginTop: "10px",
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                  },
                }}
              />
              <CustomTypography
                text={
                  orderInfo.paymentMethod
                    ? orderInfo.paymentMethod
                        .replace(/_/g, " ") // Replace all underscores with spaces
                        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
                    : "N/A"
                }
                align="left"
                sx={{
                  fontWeight: "500",
                  color: theme.palette.text.black,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                }}
              />
            </Box>
            {/* Customer Info */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "10px",
              }}
            >
              <CustomTypography
                text={"Customer Information"}
                align="left"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.text.black,
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                  },
                }}
              />
              <CustomTypography
                text={orderInfo.customerName}
                align="left"
                sx={{
                  fontWeight: "500",
                  color: theme.palette.text.black,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                }}
              />
              <CustomTypography
                text={orderInfo.emailAddress}
                align="left"
                sx={{
                  fontWeight: "500",
                  color: theme.palette.text.black,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                }}
              />
              <CustomTypography
                text={orderInfo.number}
                align="left"
                sx={{
                  fontWeight: "500",
                  color: theme.palette.text.black,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                }}
              />

              <CustomTypography
                text={orderInfo.address}
                align="left"
                sx={{
                  fontWeight: "500",
                  color: theme.palette.text.black,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                }}
              />
            </Box>
          </Box>

          <ProductTable products={orderInfo.foodList} />
          <PriceInfoBox tittle={"Cart Total"} price={orderInfo.cartTotal} />
          <PriceInfoBox
            tittle={"Delivery Charge"}
            price={orderInfo.deliveryCharge}
          />
          <PriceInfoBox
            tittle={"Service Charge"}
            price={orderInfo.serviceCharge}
          />
          <PriceInfoBox
            tittle={"Total"}
            price={orderInfo.netTotal}
            isBold={true}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

const PriceInfoBox = ({ tittle, price, isBold }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        marginTop: "10px",
      }}
    >
      <CustomTypography
        text={tittle}
        align="left"
        sx={{
          fontWeight: isBold ? "600" : "500",
          color: theme.palette.text.black,
          fontSize: {
            xs: "14px",
            sm: "16px",
          },
        }}
      />
      <CustomTypography
        text={`Rs ${price.toFixed(2)}`}
        align="left"
        sx={{
          fontWeight: isBold ? "600" : "500",
          color: theme.palette.text.black,
          fontSize: {
            xs: "12px",
            sm: "14px",
          },
        }}
      />
    </Box>
  );
};
export default OrderViewDialogBox;
