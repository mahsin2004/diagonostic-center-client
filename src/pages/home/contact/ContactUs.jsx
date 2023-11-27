import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    massage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Successfully",
      text: "Your massage has been send.",
      icon: "success",
    });

    setFormData({
      name: "",
      email: "",
      massage: "",
    });
  };

  return (
    <Container sx={{ py: 6 }} component="main" maxWidth="md">
      <Paper
        elevation={1}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Typography
          component="h1"
          sx={{ fontWeight: "bold", color: "#818181" }}
          variant="h5"
        >
          Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
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
                label="Send a Massage"
                variant="outlined"
                multiline
                rows={3}
                name="massage"
                onChange={handleChange}
                value={formData.massage}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, py: 1.5 }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactUs;
