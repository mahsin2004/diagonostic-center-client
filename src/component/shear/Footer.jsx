import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{ color: "white" }}>
      {"Copyright © "}
      Health Care {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 10,
        bgcolor: "#3c3c3c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <img
            src="https://i.postimg.cc/B6WgpTx8/output-onlinepngtools.png"
            alt="Logo"
            style={{ height: 52, marginRight: 6 }}
          />
          <Typography variant="h5" sx={{ color: "white" }}>
            Health Care
          </Typography>
          {/* Social Media Icons */}
          <Box sx={{ mt: 2 }}>
            <IconButton sx={{ color: "white" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
          </Box>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
