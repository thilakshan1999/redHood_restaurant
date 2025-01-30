import { useTheme, Modal, Fade, Box, Button, Snackbar } from "@mui/material";
import CustomTypography from "../typography/customTypography";
import CustomButton from "../button/customButton";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProviderComponent from "../../../provider/formProviderComponent";
import CustomTextField from "../form/customTextField";
import { useState } from "react";

const SignUpDialogBox = ({ open, setOpen }) => {
  const theme = useTheme();
  const handleClose = () => setOpen(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const signUpSchema = yup.object().shape({
    email: yup.string().required(`Email is required`).email(`Invalid email`),
    password: yup
      .string()
      .required(`Password is required`)
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const defaultSignUpValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signUpMethods = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: defaultSignUpValues,
  });

  const { handleSubmit: handleSignUpSubmit, setError } = signUpMethods;

  const onSubmit = handleSignUpSubmit((data) => {
    const { email, password } = data;

    if (email === "test@example.com") {
      setSnackbarMessage("Sign-Up Successful!");
      setOpenSnackbar(true);
      handleClose();
    } else {
      setSnackbarMessage("Email is already in use.");
      setOpenSnackbar(true);
    }
  });

  return (
    <>
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
              <FormProviderComponent
                onSubmit={onSubmit}
                methods={signUpMethods}
              >
                {/* Title */}
                <CustomTypography
                  text={"Create a New Account"}
                  align="center"
                  sx={{
                    fontWeight: "600",
                    color: theme.palette.text.black,
                    fontSize: "24px",
                  }}
                />

                <CustomTypography
                  text={
                    "Please enter your email, password, and confirm password to sign up."
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
                  type="password"
                />

                <Box sx={{ height: "20px" }} />

                <CustomTextField
                  labelText={"Confirm Password"}
                  width={"100%"}
                  name={"confirmPassword"}
                  required={true}
                  type="password"
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
                  Sign Up
                </Button>

                <CustomButton
                  onClick={() => {}}
                  text={"Already have an account?"}
                  backgroundColor={theme.palette.button.black}
                  padding={"12px 18px"}
                  sx={{ width: "100%" }}
                />
              </FormProviderComponent>
            </Box>
          </Box>
        </Fade>
      </Modal>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </>
  );
};

export default SignUpDialogBox;
