import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HealthTips = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tips = [] } = useQuery({
    queryKey: ["tips"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tips");
      return res.data;
    },
  });

  return (
    <Container maxWidth="lg" sx={{ my: 11 }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight="bold"
          color="#606060"
        >
          Health Tips
        </Typography>
        <Typography variant="body1" textAlign="center" color="#606060">
          Stay Healthy
        </Typography>
      </Box>
      <Swiper
        style={{
          "--swiper-navigation-color": "#2787d2",
          "--swiper-pagination-color": "#2787d2",
        }}
        modules={[Navigation, Autoplay, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {tips.map((item) => (
          <SwiperSlide key={item._id}>
            <Paper elevation={1}>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid item lg={6}>
                  <img
                    src={item.image}
                    alt="Logo"
                    style={{ width: 500, height: 300 }}
                  />
                </Grid>
                <Grid item lg={6}>
                  <Grid mb={1}>
                    <Grid>
                      <Typography variant="h4" color="textPrimary">
                        {item.title}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Typography
                      variant="h6"
                      sx={{ width: 500, fontSize: 18 }}
                      gutterBottom
                    >
                      Tips1 : {item.tips1}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ width: 500, fontSize: 18 }}
                      gutterBottom
                    >
                      Tips2 : {item.tips2}
                    </Typography>
                    <Typography variant="h6" sx={{ width: 500, fontSize: 18 }}>
                      Tips3 : {item.tips3}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default HealthTips;
