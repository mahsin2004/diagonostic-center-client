import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import toast from "react-hot-toast";
import Paper from "@mui/material/Paper";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Button from "@mui/material/Button";

const AddBanner = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    image: "",
    couponCode: "",
    couponRate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const banner = {
      name: formData.name,
      title: formData.title,
      image: formData.image,
      couponCode: formData.couponCode,
      couponRate: formData.couponRate,
      description: formData.description,
      isActive: false,
    };
    console.log(banner);
    axiosPublic
      .post("/banners", banner)
      .then((res) => {
        console.log(res.data);
        setFormData({
          name: "",
          title: "",
          image: "",
          couponCode: "",
          couponRate: "",
          description: "",
        });
        if (res.data.insertedId) {
          toast.success("Banner info added database");
        }
      })
      .catch((error) => {
        toast.error(error.code);
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
          Add A Banner
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
                label="Title"
                variant="outlined"
                name="title"
                onChange={handleChange}
                value={formData.title}
                required
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <TextField
                fullWidth
                label="Image URL"
                variant="outlined"
                name="image"
                onChange={handleChange}
                value={formData.image}
                required
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <TextField
                fullWidth
                label="Coupon Code"
                variant="outlined"
                name="couponCode"
                onChange={handleChange}
                value={formData.couponCode}
                required
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <TextField
                fullWidth
                label="Coupon Rate 20%"
                variant="outlined"
                name="couponRate"
                onChange={handleChange}
                value={formData.couponRate}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={3}
                name="description"
                onChange={handleChange}
                value={formData.description}
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
            Add
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddBanner;
