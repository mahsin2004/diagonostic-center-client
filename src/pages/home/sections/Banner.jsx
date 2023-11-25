import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Banner = () => {
  return (
    <Box
      sx={{
        mt: 11,
        color: "#606060",
        textAlign: "center",
        padding: "50px 0",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item lg={6} sx={{ textAlign: "left" }}>
            <Typography variant="h5" sx={{ fontSize: 20 }} gutterBottom>
              Winter Offer
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Welcome to Our Website
            </Typography>
            <Typography variant="subtitle1" sx={{ my: 1, maxWidth: 400 }}>
              Discover amazing features and services.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: 18, fontWeight: 'bold', my: 1 }} gutterBottom>
              Coupon Code : BESTWHISH
            </Typography>
            <Typography variant="h5" sx={{ fontSize: 30, fontWeight: 'bold' }} gutterBottom>
              Upto <br /> 20% OFF <br /> With Coupon Code
            </Typography>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Grid>
          <Grid
            item
            lg={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              marginRight: 0,
            }}
          >
            <img
              height={400}
              width={500}
              src="https://i.ibb.co/QcHYZGZ/bannder455.png"
              alt=""
              style={{ borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
