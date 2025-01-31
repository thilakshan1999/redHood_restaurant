import { useTheme, Modal, Fade, Box, Button } from "@mui/material";
import CustomTypography from "../typography/customTypography";
import CustomButton from "../button/customButton";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProviderComponent from "../../../provider/formProviderComponent";
import CustomTextField from "../form/customTextField";
import { useNavigate } from "react-router-dom";

const LoginDialogBox = ({ open, setOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClose = () => setOpen(false);

  const messageSchema = yup.object().shape({
    email: yup.string().required(`Email is required`).email(`Invalid email`),
    password: yup
      .string()
      .required(`Phone Number is required`)
      .min(6, "Password must be at least 6 characters"),
  });

  const defaultMessageValues = {
    password: "",
    email: "",
  };

  const messageMethods = useForm({
    resolver: yupResolver(messageSchema),
    defaultValues: defaultMessageValues,
  });

  const { handleSubmit: handleLoginSubmit } = messageMethods;

  const onSubmit = handleLoginSubmit((data) => {
    console.log(data);
    if (data.email === "thilakshanlk@gmail.com" && data.password === "123456") {
      console.log("correct account");
      navigate("/admin");
      handleClose();
    } else {
      handleClose();
    }
  });
  return (
    <Modal
      open={open}
      onClose={handleClose}
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
              xs: "90%",
              sm: "400px",
            },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              padding: "40px 20px",
            }}
          >
            <FormProviderComponent onSubmit={onSubmit} methods={messageMethods}>
              {/* Tittle */}
              <CustomTypography
                text={"Login to Your Account"}
                align="center"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.text.black,
                  fontSize: "24px",
                }}
              />

              <CustomTypography
                text={
                  "Please enter your email and password to access your account."
                }
                align="center"
                sx={{
                  fontWeight: "400",
                  color: theme.palette.text.secondary,
                  fontSize: "16px",
                  marginBottom: "30px",
                }}
              />

              <CustomTextField
                labelText={"Email"}
                width={"100%"}
                name={"email"}
                required={true}
              />

              <Box sx={{ height: "20px" }} />

              <CustomTextField
                labelText={"Password"}
                width={"100%"}
                name={"password"}
                required={true}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  marginTop: "30px",
                  marginBottom: "10px",
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
                Login
              </Button>
              <CustomButton
                onClick={() => {}}
                text={"Don't have account"}
                backgroundColor={theme.palette.button.black}
                padding={"12px 18px"}
                sx={{ width: "100%" }}
              />
            </FormProviderComponent>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
export default LoginDialogBox;
