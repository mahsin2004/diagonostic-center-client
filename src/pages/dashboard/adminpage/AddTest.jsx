import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const AddTest = () => {
    const axiosPublic = useAxiosPublic();
    const [formData, setFormData] = useState({
        title: "", 
        image: "", 
        availableDates: "", 
        shortDescription: "", 
        price: "", 
        time: "",
        slots: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const test = {
          title: formData.title,
          image: formData.image,
          availableDates: formData.availableDates,
          shortDescription: formData.shortDescription,
          price: formData.price,
          time: formData.time,
          slots: formData.slots,
        };
        console.log(test)
        axiosPublic
          .post("/tests", test)
          .then((res) => {
            console.log(res.data);
            setFormData({
                title: "", 
                image: "", 
                availableDates: "", 
                shortDescription: "", 
                price: "", 
                time: "",
                slots: ""
            });
            if (res.data.insertedId) {
              toast.success("Test Added Successfully");
            }
          })
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
            Add A Test
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={6}>
                <TextField
                  fullWidth
                  label="Test Name"
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
                  label=""
                  variant="outlined"
                  type="date"
                  name="availableDates"
                  onChange={handleChange}
                  value={formData.availableDates}
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
                  label="Price"
                  variant="outlined"
                  name="price"
                  onChange={handleChange}
                  value={formData.price}
                  required
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <TextField
                  fullWidth
                  label="Time 11:00"
                  variant="outlined"
                  name="time"
                  onChange={handleChange}
                  value={formData.time}
                  required
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <TextField
                  fullWidth
                  label="Slots 20 or any number"
                  variant="outlined"
                  name="slots"
                  onChange={handleChange}
                  value={formData.slots}
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
                  name="shortDescription"
                  onChange={handleChange}
                  value={formData.shortDescription}
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

export default AddTest;