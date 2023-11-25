import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import Social from "./Social";

const Login = () => {
  const { userLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;
    userLogin(email, password)
      .then(() => {
        toast.success("login successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container sx={{ pt: 15, pb: 5 }} component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 5 }}>
          <Typography
            component="h1"
            variant="h5"
            sx={{ marginBottom: 2, textAlign: "center" }}
          >
            Login
          </Typography>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </Grid>
          </Grid>
          {/* Submit button */}
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, py: 1.5 }}
          >
            Sign In
          </Button>
          <Social></Social>
          <Box sx={{ marginTop: 2 }}>
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button color="inherit">
                Do not have an account? Register Now
              </Button>
            </NavLink>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
