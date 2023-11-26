import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Cart2 = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={1} >
        <Grid container spacing={7} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item lg={6}>
            <img
              src="https://i.postimg.cc/mDFh8nxC/thyroid.jpg"
              alt="Logo"
              style={{ width: 500, height: 200 }}
            />
          </Grid>
          <Grid item lg={6}>
            <Grid>
              <Grid>
                <Typography variant="h4" color="textPrimary">
                Thyroid Function Test
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <Typography variant="h6"  color="textPrimary">
                  Type: Blood Test
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  color="textSecondary"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  Measures thyroid hormone levels to assess thyroid function.
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

Cart2.propTypes = {
  job: PropTypes.object,
};

export default Cart2;
