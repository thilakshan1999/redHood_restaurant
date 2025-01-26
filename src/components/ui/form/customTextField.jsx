import { useFormContext, Controller } from "react-hook-form";
import { Stack, TextField, Typography, useTheme } from "@mui/material";
import CustomTypography from "../typography/customTypography";

const CustomTextField = ({ name, labelText, width, required }) => {
  const { control } = useFormContext();
  const theme = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack gap={"4px"} width={width}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <CustomTypography
              text={labelText}
              align="left"
              sx={{
                fontWeight: "600",
                color: theme.palette.text.black,
                fontSize: "14px",
              }}
            />
            {required && (
              <CustomTypography
                text="*"
                align="left"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.error.main,
                  fontSize: "14px",
                }}
              />
            )}
          </Stack>

          <TextField
            error={!!error}
            helperText={error ? error.message : ""}
            name={name}
            value={field.value}
            onChange={(event) => {
              field.onChange(event.target.value);
            }}
            size="small"
            variant="outlined"
            rows={1}
            sx={{
              color: "black",
              width: {
                md: width,
                xs: "100%",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.grey[400],
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.grey[600],
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          />
        </Stack>
      )}
    />
  );
};

export default CustomTextField;
