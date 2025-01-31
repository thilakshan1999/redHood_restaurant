import { useTheme } from "@emotion/react";
import CustomTextField from "../../../components/ui/form/customTextField";
import FormProviderComponent from "../../../provider/formProviderComponent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@mui/material";
import CustomSelect from "../../../components/ui/form/customSelect";

const DeliveryForm = ({ onOrderPlaced }) => {
  const messageSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    phone_number: yup
      .string()
      .required(`Phone number is required`)
      .matches(
        /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
        `Invalid phone number`
      ),
    email: yup.string().required(`Email is required`).email(`Invalid email`),
    note: yup.string(),
    order_type: yup.string().required("Order Type is required"),
    payment_method: yup.string().required("Payment Method is required"),
    address: yup.string().required("Address is required "),
  });

  const defaultMessageValues = {
    name: "",
    phone_number: "",
    email: "",
    note: "",
    order_type: "",
    address: "",
  };

  const messageMethods = useForm({
    resolver: yupResolver(messageSchema),
    defaultValues: defaultMessageValues,
  });

  const { handleSubmit: handleMessageSubmit } = messageMethods;

  const onMessageSubmit = handleMessageSubmit((data) => {
    onOrderPlaced(data);
  });

  const theme = useTheme();
  return (
    <Box sx={{ marginTop: "20px" }}>
      <FormProviderComponent
        onSubmit={onMessageSubmit}
        methods={messageMethods}
      >
        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            marginTop: "0px",
          }}
        >
          <Grid item xs={12} sm={6}>
            <CustomTextField
              labelText={"Your Name"}
              width={"100%"}
              name={"name"}
              required={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              labelText={"Your Mobile Number"}
              width={"100%"}
              name={"phone_number"}
              required={true}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            marginTop: "0px",
          }}
        >
          <Grid item xs={12} sm={6}>
            <CustomSelect
              labelText="Order Type"
              width="100%"
              name="order_type"
              required={true}
              options={[
                { value: "delivery", label: "Delivery" },
                { value: "take_away", label: "Take Away" },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              labelText="Payment Method"
              width="100%"
              name="payment_method"
              required={true}
              options={[
                { value: "cash_on_delivery", label: "Cash On Delivery" },
                { value: "card_payment", label: "Card Payment" },
              ]}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            marginTop: "0px",
          }}
        >
          <Grid item xs={12} sm={6}>
            <CustomTextField
              labelText={"Your Email Address"}
              width={"100%"}
              name={"email"}
              required={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              labelText={"Your Address"}
              width={"100%"}
              name={"address"}
              required={true}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            marginTop: "0px",
          }}
        >
          <Grid item xs={12}>
            <CustomTextField
              labelText={"Delivery Note"}
              width={"100%"}
              name={"note"}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "100%",
            marginTop: "20px",
            backgroundColor: theme.palette.button.primary,
            color: theme.palette.text.white,
            fontWeight: "bold",
            padding: "12px 18px",
            textTransform: "uppercase",
            fontSize: {
              xs: "10px",
              sm: "14px",
            },
            fontFamily: theme.typography.fontFamily,
            borderRadius: "8px",
          }}
        >
          Place Order
        </Button>
      </FormProviderComponent>
    </Box>
  );
};
export default DeliveryForm;
