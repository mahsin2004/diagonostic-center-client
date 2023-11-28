import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Container from "@mui/material/Container";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import useBooked from "../../../hook/useBooked";
import { useQuery } from "@tanstack/react-query";

const Reservation = () => {
    const axiosBooked = useBooked()
    const { data: booked = [], } = useQuery({
        queryKey: ["banners12"],
        queryFn: async () => {
          const res = await axiosBooked.get("/banners");
          return res.data;
        },
      });


    return (
        <Container sx={{ mt: 10 }}>
      <div>
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#575859",
            mb: 4,
          }}
          variant="h4"
        >
          Reservation
        </Typography>
      </div>

      <TableContainer component={Paper}>
        <Table>
          {/* head */}
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booked.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.availableDates}</TableCell>
                <TableCell>{item.time} AM</TableCell>
                <TableCell>
                  <Button
                    sx={{ width: 20, height: 35 }}
                    
                 // Call handleCancel with the bookingId
                    variant="contained"
                    color="secondary"
                  >
                    cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    );
};

export default Reservation;