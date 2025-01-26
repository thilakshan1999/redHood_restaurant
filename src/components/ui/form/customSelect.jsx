import { useFormContext, Controller } from "react-hook-form";
import {
  Stack,
  Select,
  MenuItem,
  Typography,
  FormControl,
  useTheme,
} from "@mui/material";
import CustomTypography from "../typography/customTypography";

const CustomSelect = ({ name, labelText, width, required, options }) => {
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

          <FormControl
            error={!!error}
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              width: {
                md: width,
                xs: "100%",
              },
            }}
          >
            <Select
              {...field}
              value={field.value || ""}
              onChange={(event) => field.onChange(event.target.value)}
              labelId={`${name}-label`}
              sx={{
                color: "black",
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
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {error && (
              <Typography variant="body2" color="error">
                {error.message}
              </Typography>
            )}
          </FormControl>
        </Stack>
      )}
    />
  );
};

export default CustomSelect;
