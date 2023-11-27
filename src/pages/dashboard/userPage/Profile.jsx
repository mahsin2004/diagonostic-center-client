import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  //   email: "",
  //     name: "",
  //     bloodGroup: "",
  //     district: "",
  //     upazila: "",

  const { data: users = {}, isLoading, refetch } = useQuery({
    queryKey: ["Profile"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user.email}`);
      return res.data;
    },
  });
  console.log(users);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const upazila = form.upazila.value;

    const userInfo = {
        displayName,
        email,
        bloodGroup,
        district,
        upazila 
    }
    console.log(userInfo)
    axiosPublic
      .put(`/users/${users._id}`, userInfo)
      .then((res) => {
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
    <Container maxWidth="lg" sx={{ marginTop: 6, marginBottom: 16 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Avatar
          alt="User Avatar"
          src={users?.photoURL}
          sx={{ width: 100, height: 100, marginBottom: 2 }}
        />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#606060" }}
          gutterBottom
        >
          My Profile
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              name="displayName"
              defaultValue={users?.displayName}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              defaultValue={users?.email}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Blood Group"
              name="bloodGroup"
              defaultValue={users?.bloodGroup}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="District"
              name="district"
              defaultValue={users?.district}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Upazila"
              name="upazila"
              defaultValue={users?.upazila}
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

export default Profile;
