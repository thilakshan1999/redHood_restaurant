import { Box, Grid, useTheme } from "@mui/material";
import FooterHeading from "../footerHeading";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import ContactInfoDetails from "./contactInfoDetails";
import CustomLinkButton from "../../../components/ui/button/customLinkButton";

const ContactInfo = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12} md={3}>
      <FooterHeading tittleText={"Contact Info"} />
      <ContactInfoDetails
        tittle={"Address"}
        description={"123 Redhood Street"}
      />
      <ContactInfoDetails tittle={"Phone"} description={"+1 234 567 890"} />
      <ContactInfoDetails
        tittle={"Email"}
        description={"contact@redhood.com"}
      />
      <ContactInfoDetails
        tittle={"Website"}
        description={"www.redhoodrestaurant.com"}
      />
      <Box sx={{ display: "flex", gap: 2, marginTop: "10px" }}>
        <CustomLinkButton
          ref={"#"}
          color={theme.palette.text.white}
          Icon={Facebook}
        />
        <CustomLinkButton
          ref={"#"}
          color={theme.palette.text.white}
          Icon={Instagram}
        />
        <CustomLinkButton ref={"#"} color={"#ffffff"} Icon={Twitter} />
      </Box>
    </Grid>
  );
};
export default ContactInfo;
