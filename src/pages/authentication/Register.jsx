import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useAxiosPublic from "../../hook/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../../hook/useAuth";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const districts = [
  "Comilla",
  "Feni",
  "Brahmanbaria",
  "Rangamati",
  "Noakhali",
  "Chandpur",
  "Lakshmipur",
  "Chattogram",
  "Coxsbazar",
  "Khagrachhari",
  "Bandarban",
  "Sirajganj",
  "Pabna",
  "Bogura",
  "Rajshahi",
  "Natore",
  "Joypurhat",
  "Chapainawabganj",
  "Naogaon",
  "Jashore",
  "Satkhira",
  "Meherpur",
  "Narail",
  "Chuadanga",
  "Kushtia",
  "Magura",
  "Khulna",
  "Bagerhat",
  "Jhenaidah",
  "Jhalakathi",
  "Patuakhali",
  "Pirojpur",
  "Barisal",
  "Bhola",
  "Barguna",
  "Sylhet",
  "Moulvibazar",
  "Habiganj",
  "Sunamganj",
  "Narsingdi",
  "Gazipur",
  "Shariatpur",
  "Narayanganj",
  "Tangail",
  "Kishoreganj",
  "Manikganj",
  "Dhaka",
  "Munshiganj",
  "Rajbari",
  "Madaripur",
  "Gopalganj",
  "Faridpur",
  "Panchagarh",
  "Dinajpur",
  "Lalmonirhat",
  "Nilphamari",
  "Gaibandha",
  "Thakurgaon",
  "Rangpur",
  "Kurigram",
  "Sherpur",
  "Mymensingh",
  "Jamalpur",
  "Netrokona",
];
const upazilas = [
  "Debidwar",
  "Barura",
  "Brahmanpara",
  "Chandina",
  "Chauddagram",
  "Daudkandi",
  "Homna",
  "Laksam",
  "Muradnagar",
  "Nangalkot",
  "Comilla Sadar",
  "Meghna",
  "Monohargonj",
  "Sadarsouth",
  "Titas",
  "Burichang",
  "Lalmai",
  "Chhagalnaiya",
  "Feni Sadar",
  "Sonagazi",
  "Fulgazi",
  "Parshuram",
  "Daganbhuiyan",
  "Brahmanbaria Sadar",
  "Kasba",
  "Nasirnagar",
  "Sarail",
  "Ashuganj",
  "Akhaura",
  "Nabinagar",
  "Bancharampur",
  "Bijoynagar",
  "Rangamati Sadar",
  "Kaptai",
  "Kawkhali",
  "Baghaichari",
  "Barkal",
  "Langadu",
  "Rajasthali",
  "Belaichari",
  "Juraichari",
  "Naniarchar",
  "Noakhali Sadar",
  "Companiganj",
  "Begumganj",
  "Hatia",
  "Subarnachar",
  "Kabirhat",
  "Senbug",
  "Chatkhil",
  "Sonaimori",
  "Haimchar",
  "Kachua",
  "Shahrasti",
  "Chandpur Sadar",
  "Matlab South",
  "Hajiganj",
  "Matlab North",
  "Faridgonj",
  "Lakshmipur Sadar",
  "Kamalnagar",
  "Raipur",
  "Ramgati",
  "Ramganj",
  "Rangunia",
  "Sitakunda",
  "Mirsharai",
  "Patiya",
  "Sandwip",
  "Banshkhali",
  "Boalkhali",
  "Anwara",
  "Chandanaish",
  "Satkania",
  "Lohagara",
  "Hathazari",
  "Fatikchhari",
  "Raozan",
  "Karnafuli",
  "CoxsBazar Sadar",
  "Chakaria",
  "Kutubdia",
  "Ukhiya",
  "Moheshkhali",
  "Pekua",
  "Ramu",
  "Teknaf",
  "Khagrachhari Sadar",
  "Dighinala",
  "Panchari",
  "Laxmichhari",
  "Mohalchari",
  "Manikchari",
  "Ramgarh",
  "Matiranga",
  "Guimara",
  "Bandarban Sadar",
  "Alikadam",
  "Naikhongchhari",
];

const Register = () => {
  const { createUser, profileUpdate } = useAuth();
  const axiosPublic = useAxiosPublic();
  const img_hosting_key = import.meta.env.VITE_IMG_HOSTING;
  const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    avatar: "", // Provide the image URL from ImgBB
    bloodGroup: "",
    district: "",
    upazila: "",
    password: "",
    confirmPassword: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.avatar) {
      toast.error("Image upload is mandatory");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password should be 6 characters or more");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      toast.error("Password should have at least one capital letter");
      return;
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,/.?~\\]/.test(formData.password)) {
      toast.error("Password should have at least one special character");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error(
        "The confirmed password does not match the provided password."
      );
      return;
    }

    const imageFile = { image: formData.avatar };
    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    const photo = res.data.data.display_url;
    const email = formData.email;
    const password = formData.password;
    const name = formData.name;
    /// Ceate User using firebase

    createUser(email, password)
      .then(() => {
        profileUpdate(name, photo).then(() => {
          if (res.data.success) {
            const user = {
              email: email,
              name: name,
              photoURL: photo,
              bloodGroup: formData.bloodGroup,
              district: formData.district,
              upazila: formData.upazila,
              statu: formData.status,
            };
            console.log(user);
            axiosPublic.post("/users", user).then((res) => {
              console.log(res.data);
              if (res.data.insertedId) {
                toast.success("user added database");
              }
            });
          }
        });
        toast.success("user create successfully");
        setFormData({
          email: "",
          name: "",
          avatar: "",
          bloodGroup: "",
          district: "",
          upazila: "",
          password: "",
          confirmPassword: "",
        });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <Container sx={{ py: 6 }} component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="User Avatar"
          src={formData.avatar}
          sx={{ width: 100, height: 100, marginBottom: 2 }}
        />
        <Typography component="h1" variant="h5">
          Register Now
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                label="Name"
                variant="outlined"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Blood Group</InputLabel>
                <Select
                  label="Blood Group"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                >
                  {bloodGroups.map((group) => (
                    <MenuItem key={group} value={group}>
                      {group}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>District</InputLabel>
                <Select
                  label="District"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                >
                  {districts.map((district) => (
                    <MenuItem key={district} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Upazila</InputLabel>
                <Select
                  label="Upazila"
                  name="upazila"
                  value={formData.upazila}
                  onChange={handleChange}
                  required
                >
                  {upazilas.map((upazila) => (
                    <MenuItem key={upazila} value={upazila}>
                      {upazila}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                id="avatar"
                type="file"
                style={{ display: "none" }}
                onChange={(e) =>
                  handleChange({
                    target: { name: "avatar", value: e.target.files[0] },
                  })
                }
              />
              <label htmlFor="avatar">
                <Button variant="contained" component="span">
                  Upload Image
                </Button>
              </label>
              {formData.avatar && (
                <Typography variant="caption" display="block" gutterBottom>
                  {formData.avatar.name}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, py: 1.5 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
