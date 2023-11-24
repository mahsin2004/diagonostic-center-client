
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

const LongIn = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Form submitted");
  };

  return (
    <div>
      <Container sx={{pt: 15, pb: 5}} component="main" maxWidth="xs">
        <Paper  elevation={3}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form  onSubmit={handleSubmit}>
            {/* Username input */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              autoFocus
            />
            {/* Password input */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
            />
            {/* Submit button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </form>
        </Paper>
        <Box>
            <NavLink to="/register">Register Now</NavLink>
        </Box>
      </Container>
    </div>
  );
};

export default LongIn;
