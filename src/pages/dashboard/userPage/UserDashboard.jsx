import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import useAuth from "../../../hook/useAuth";
import useBooked from "../../../hook/useBooked";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";

const UserDashboard = () => {
  const { user } = useAuth();
  const [totalAppointments, setTotalAppointments] = useState([]);
  const axiosBooked = useBooked();

  useEffect(() => {
    axiosBooked.get(`/bookings/${user.email}`).then((res) => {
      setTotalAppointments(res.data);
    });
  }, [axiosBooked, user]);

  const totalBuy = totalAppointments.map((test) => test.price);

  const sum = totalBuy.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={2} sx={{ gap: 2 }}>
        <Grid
          item
          lg={4}
          sx={{
            fontSize: "25px",
            textAlign: "center",
            backgroundColor: "#434b85",
            pt: 7,
            pb: 8,
            borderRadius: "10px",
            color: "white",
          }}
        >
          Total Appointments <br />
          {totalAppointments.length}
        </Grid>
        <Grid
          item
          lg={3}
          sx={{
            fontSize: "25px",
            textAlign: "center",
            backgroundColor: "#614730",
            pt: 8,
            pb: 8,
            borderRadius: "10px",
            color: "white",
          }}
        >
          Total Buy: <br />
          {sum} Tk
        </Grid>
        <Grid
          item
          lg={4}
          sx={{
            fontSize: "25px",
            textAlign: "center",
            backgroundColor: "#4e708e",
            pt: 8,
            pb: 8,
            borderRadius: "10px",
            color: "white",
          }}
        >
          Total Cancelation <br />0
        </Grid>
      </Grid>
      <Grid container spacing={3} marginTop="40px">
        <Grid lg={12}>
          <Typography
            sx={{
              color: "#575859",
              mb: 4,
            }}
            variant="h5"
          >
            My Recently Booked Appointments
          </Typography>
        </Grid>
        <Grid lg={12}>
          <TableContainer component={Paper}>
            <Table>
              {/* head */}
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {totalAppointments.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.availableDates}</TableCell>
                    <TableCell>{item.time} AM</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
