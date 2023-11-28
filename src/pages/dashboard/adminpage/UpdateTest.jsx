import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";


const UpdateTest = () => {
    
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { data: test = {}, isLoading, refetch} = useQuery({
        queryKey: ["adminAllTestsUpdate"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/tests/${id}`);
          return res.data;
        },
      });

 

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const availableDates = form.availableDates.value;
        const shortDescription = form.shortDescription.value; 
        const price = form.price.value;
        const time = form.time.value;
        const slots = form.slots.value;

        const testInfo = {
          title,
          image,
          availableDates,
          shortDescription,
          price,
          time,
          slots,
        };
        
        axiosPublic.put(`/tests/update/${id}`, testInfo).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Successfully",
              text: "Updated",
              icon: "success",
              confirmButtonText: "oky",
            });
            refetch()
          }
        });
      };

      if (isLoading) {
        return (
          <div className="max-w-[1440px] mx-auto px-10">
            <p className="loading loading-spinner loading-md"></p>
          </div>
        );
      }
    return (
        <Container maxWidth="lg" sx={{ marginTop: 10, marginBottom: 16 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#606060" }}
            gutterBottom
          >
            My Profile
          </Typography>
        </Box>
        <form onSubmit={handleUpdate}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                defaultValue={test?.title}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Image URL"
                name="image"
                defaultValue={test?.image}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Available Dates"
                name="availableDates"
                defaultValue={test?.availableDates}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Description"
                name="shortDescription"
                defaultValue={test?.shortDescription}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Time"
                name="time"
                defaultValue={test?.time}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                defaultValue={test?.price}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Slots"
                name="slots"
                defaultValue={test?.slots}
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, py: 1.5 }}
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
};

export default UpdateTest;