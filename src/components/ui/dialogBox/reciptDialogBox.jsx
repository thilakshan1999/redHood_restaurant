import React from "react";
import { Modal, Fade, Box, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomTypography from "../typography/customTypography";
import ProductTable from "../../../sections/main/checkout/productTable";
import { useNavigate } from "react-router-dom";
import CustomButton from "../button/customButton";

const ReceiptDialogBox = ({ open, orderInfo }) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(`/`);
  };
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={navigateHome}
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
            padding: "20px 20px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: "48px",
              color: "#8BC34A",
              marginBottom: "10px",
              marginTop: "20px",
            }}
          />
          <CustomTypography
            text={"Order Placed"}
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
            text={`# ${orderInfo.orderId}`}
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
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
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

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
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
              text={orderInfo.orderType
                .replace("_", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
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

          <CustomButton
            onClick={navigateHome}
            sx={{ width: "100%", marginTop: "10px" }}
            text={"Move to Home"}
            backgroundColor={theme.palette.button.black}
            padding={"12px 18px"}
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
export default ReceiptDialogBox;
