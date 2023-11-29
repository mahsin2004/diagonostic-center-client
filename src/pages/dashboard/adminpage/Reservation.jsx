import { useState } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";
import { Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import useBooked from "../../../hook/useBooked";
import Swal from "sweetalert2";

const Reservation = () => {
  const axiosBooked = useBooked();
  const [getEmail, setEmail] = useState("");
  const { data: booked = [], refetch } = useQuery({
    queryKey: ["booked12"],
    queryFn: async () => {
      const res = await axiosBooked.get("/bookings");
      return res.data;
    },
  });

  const [formData, setFormData] = useState({
    email: "",
    reportLink: "",
  });

  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputEmail = formData.email;
    setEmail(inputEmail);
  };

  const handleDelete = (id) => {
    axiosBooked.put(`/bookings/delete/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Successfully",
          text: "Deleted",
          icon: "success",
          confirmButtonText: "OK",
        });
        refetch();
      }
    });
  };
  const [currentTestId, setCurrentTestId] = useState(null);

  const handleTestSubmit = (id) => {
    setOpenModal(true);
    setCurrentTestId(id)
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleModalSubmit = () => {
    const info = {
      report: "delivered",
      reportLink: formData.reportLink
    }
    
    axiosBooked.put(`/bookings/update/${currentTestId}`, info).then(res => {
      console.log(res.data)
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Successfully",
          text: "Report submitted",
          icon: "success",
          confirmButtonText: "Okay",
        });
        refetch();
      }
    })

    setOpenModal(false);
  };

  // Filter data based on the entered email
  const matchEmail = booked.filter((item) => item.email === getEmail);

  return (
    <Container sx={{ mt: 10 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} marginBottom="30px">
          <Grid item xs={12} md={12} lg={12}>
            <Typography
              sx={{ fontSize: 34, fontWeight: "bold", color: "#38393a" }}
            >
              User Search by Email
            </Typography>
          </Grid>
          <Grid item xs={8} md={6} lg={6}>
            <TextField
              fullWidth
              label="Enter email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </Grid>
          <Grid item xs={2} md={4} lg={4}>
            <Button
              type="submit"
              sx={{ height: "100%", backgroundColor: "#4b8fd1" }}
              variant="primary"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>

      <TableContainer component={Paper}>
        <Table>
          {/* head */}
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Report</TableCell>
              <TableCell>Cancel</TableCell>
              <TableCell>Test Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchEmail.length > 0 ? (
              <>
                {matchEmail.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.report}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ width: 20, height: 35 }}
                        variant="contained"
                        color="secondary"
                      >
                        cancel
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                       onClick={() => handleDelete(item._id)}
                        sx={{ width: 20, height: 35 }}
                        variant="contained"
                        color="primary"
                      >
                        submit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <>
                {booked.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.report}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDelete(item._id)}
                        sx={{ width: 20, height: 35 }}
                        variant="contained"
                        color="secondary"
                      >
                        cancel
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={()=> handleTestSubmit(item._id)}
                        sx={{ width: 20, height: 35 }}
                        variant="contained"
                        color="primary"
                      >
                        submit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Test Submission</DialogTitle>
        <DialogContent>
          <TextField
            label="PDF or DOC link"
            variant="outlined"
            fullWidth
            name="reportLink"
            onChange={handleChange}
            value={formData.reportLink}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleModalSubmit} color="primary">
            Submit Now
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
};

export default Reservation;
