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
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";

const Appointments = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: booked = [], refetch } = useQuery({
        queryKey: ["bookingsEmail"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/bookings/${user.email}`);
          return res.data;
        },
      });

      const handleDelete = (id) => {
        console.log(id);
    
        axiosPublic.put(`/bookings/delete/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Successfully",
                text: "Deleted",
                icon: "success",
                confirmButtonText: "oky",
              });
              refetch()
            }
          });
      };


    return (
        <Container sx={{ mt: 10 }}>
          <div>
            <Typography sx={{fontWeight: 'bold', textAlign: "center", color: '#575859', mb: 4}} variant="h4">Appointments</Typography>
          </div>
          <div>
            <div>
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
                        <TableCell>
                          {item.availableDates}
                        </TableCell>
                        <TableCell>
                          {item.time} AM
                        </TableCell>
                        <TableCell>
                          <Button sx={{width: 20, height: 35}}
                            onClick={() => handleDelete(item._id)}
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
            </div>
          </div>
        </Container>
    );
};

export default Appointments;