import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Cart = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={1} >
        <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item lg={6}>
            <img
              src="https://i.postimg.cc/Dzhr1t0b/peasure-Check.jpg"
              alt="Logo"
              style={{ width: 500, height: 200 }}
            />
          </Grid>
          <Grid item lg={6}>
            <Grid>
              <Grid>
                <Typography variant="h4" color="textPrimary">
                  Blood Pressure Check
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <Typography variant="h6"  color="textPrimary">
                  Type: Vital Sign
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  color="textSecondary"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  A quick check of your blood pressure to monitor cardiovascular
                  health.
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="body1">Total Booked : 10K+</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

Cart.propTypes = {
  job: PropTypes.object,
};

export default Cart;
