import { useState } from "react";
import { useParams } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Paper from "@mui/material/Paper";
import { Box, Grid } from "@mui/material";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuth from "../../../hook/useAuth";

const Details = () => {
  const {user} = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: test = {}, refetch } = useQuery({
    queryKey: ["detailsTest"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tests/${id}`);
      return res.data;
    },
  });

  

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(test.availableDates),
      key: "selection",
    },
  ]);


  

  const handleBookNow = () => {
    const selectedDate = state[0].startDate;
    const day = selectedDate.getDate().toString().padStart(2, "0");
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0"); // Note: Months are zero-based
    const year = selectedDate.getFullYear();

    // Assemble the formatted date
    const formattedDate = `${month}-${day}-${year}`;

    const endDate = new Date(test.availableDates);
    const applyDate = new Date(formattedDate);
    console.log(endDate);
    console.log(applyDate);

    const {title, image, availableDates, shortDescription, price, time } =
      test;
    
    const bookingInfo = {
      id,
      email: user.email,
      title,
      image,
      availableDates,
      shortDescription,
      price, 
      time,
      report: "pending"
    }
    console.log(bookingInfo)

    if (applyDate > endDate) {
      Swal.fire({
        title: "Failed",
        text: "The application deadline has passed.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      console.log(true);
    } else {
      axiosPublic.post("/bookings", bookingInfo).then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
          toast.success("Booking Successful");
        }
        axiosPublic.patch(`/tests/reduce/${id}`).then(res => {
          console.log(res.data)
        })
        refetch();
      })
      console.log(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <img
        src={test?.image}
        alt="image"
        style={{
          width: "100%",
          height: "450px",
          borderBottom: "2px solid #3e3d3d",
        }}
      />
      <Grid container spacing={4} marginTop="20px">
        <Grid item lg={7}>
          <Box
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 8,
            }}
          >
            <CardContent style={{ flex: "1 0 auto" }}>
              <Typography
                variant="h6"
                style={{
                  color: "#1C1B1B",
                  fontSize: "35px",
                  fontWeight: 600,
                  marginTop: 4,
                  marginBottom: 2,
                }}
              >
                {test.title}
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#3e3d3d"
                style={{
                  color: "#1c1b1b99",
                  fontSize: "18px",
                  maxHeight: "120px",
                  lineHeight: "1.6",
                  overflow: "hidden",
                }}
                gutterBottom
              >
                {test.shortDescription}
              </Typography>

              <div>
                <Typography variant="h6" fontWeight="bold" color="#3e3d3d">
                  Available dates: {test.availableDates}
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="#3e3d3d">
                    Slots available: {test.slots}
                  </Typography>
              </div>
            </CardContent>
          </Box>
        </Grid>
        <Grid item lg={5}>
          <Paper sx={{ fontFamily: "roboto", p: 2 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#3e3d3d"
              marginBottom="20px"
            >
              Test Price: {test.price} Tk
            </Typography>

            <DateRange
              editableDateInputs={false}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              minDate={new Date()}
            />

            <CardActions
              style={{
                marginBottom: 15,
                marginTop: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleBookNow}
                style={{
                  marginTop: "10px",
                  backgroundColor: "#00bcd4",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                  width: "150px",
                  padding: "9px",
                  borderRadius: "4px",
                }}
              >
                Book now
              </Button>
            </CardActions>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
