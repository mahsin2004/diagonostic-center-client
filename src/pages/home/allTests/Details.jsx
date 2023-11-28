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

const Details = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: test = {} } = useQuery({
    queryKey: ["369"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tests/${id}`);
      return res.data;
    },
  });


 const limitDate = new Date(test.availableDates)

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(test.availableDates),
      key: "selection",
    },
  ]);

  const today = new Date();
  const handleDateChange = (item) => {
    const selectedDate = item.selection;

    if (selectedDate <= limitDate) {
      setState([
        {
          startDate: today,
          endDate: limitDate,
          key: "selection",
        },
      ]);
    } else {
      setState([item.selection]);
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
              </div>
              <div>
                <Typography variant="h6" fontWeight="bold" color="#3e3d3d">
                  Slots available: {test.slots}
                </Typography>
              </div>
              <div></div>
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
              editableDateInputs={true}
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              ranges={state}
              minDate={today}
              maxDate={limitDate}
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
