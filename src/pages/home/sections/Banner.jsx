import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {

  const axiosPublic = useAxiosPublic();
  const { data: banners = [] } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await axiosPublic.get("/banners");
      return res.data;
    },
  });
  console.log(banners)
  
  const ActiveBanner = banners.find(banner => banner.isActive === true)
  console.log(ActiveBanner)

  return (
    <Box
      sx={{
        mt: 11,
        color: "#606060",
        textAlign: "center",
        padding: "50px 0",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item lg={5} sx={{ textAlign: "left" }}>
            <Typography variant="h5" sx={{ fontSize: 20 }} gutterBottom>
              {ActiveBanner?.name}
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {ActiveBanner?.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ my: 1, maxWidth: 400 }}>
              {ActiveBanner?.description}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: 28, fontWeight: "bold", my: 1 }}
              gutterBottom
            >
              Upto <br /> {ActiveBanner?.couponRate}% OFF With Coupon Code
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: 18, fontWeight: "bold" }}
              gutterBottom
            >
              Coupon Code : {ActiveBanner?.couponCode}
            </Typography>
            <NavLink to="/allTests">
              <Button sx={{ mt: 1 }} variant="contained" color="primary">
                All Tests
              </Button>
            </NavLink>
          </Grid>
          <Grid
            item
            lg={7}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <img
              src={ActiveBanner?.image}
              alt=""
              style={{ borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
