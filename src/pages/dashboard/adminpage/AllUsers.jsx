import { useState } from 'react';
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
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useData from "../../../hook/useData";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const axiosData = useData();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users22"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const handleStatus = (id) => {
    axiosData.patch(`/users/status/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Successfully",
          text: "Status Update",
          icon: "success",
          confirmButtonText: "Okay",
        });
        refetch();
      }
    });
  };

  const makeRole = (id) => {
    axiosData.patch(`/users/role/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Successfully",
          text: "Role Update",
          icon: "success",
          confirmButtonText: "Okay",
        });
        refetch();
      }
    });
  };

  const handleSeeInfo = (user) => {
    setSelectedUser(user);
    setInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setInfoModalOpen(false);
  };

  return (
    <div>
      <Container sx={{ mt: 10 }}>
      <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#575859",
            mb: 4,
          }}
          variant="h4"
        >
          All Users
        </Typography>
        <div>
          <div>
            <TableContainer component={Paper}>
              <Table>
                {/* head */}
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>NAME</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Info</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((item, index) => (
                    <TableRow key={item._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.displayName}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleSeeInfo(item)}
                          sx={{ width: 110, height: "auto" }}
                          variant="contained"
                          color="primary"
                        >
                          See Info
                        </Button>
                      </TableCell>
                      <TableCell>
                        {item.status === "active" ? (
                          <Button
                            onClick={() => handleStatus(item._id)}
                            sx={{ width: 90, height: "auto" }}
                            variant="contained"
                            color="primary"
                          >
                            active
                          </Button>
                        ) : (
                          <Button
                            onClick={() => handleStatus(item._id)}
                            sx={{ width: 90, height: "auto" }}
                            variant="contained"
                            color="secondary"
                          >
                            blocked
                          </Button>
                        )}
                      </TableCell>
                      <TableCell>
                        {item?.role === "Admin" ? (
                          <Button
                            sx={{ width: 90, height: 36 }}
                            variant="contained"
                            color="primary"
                          >
                            Admin
                          </Button>
                        ) : (
                          <Button
                            sx={{ width: 90, height: 36 }}
                            onClick={() => makeRole(item._id)}
                            variant="contained"
                            color="secondary"
                          >
                            <FaUser />
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Container>
      <Dialog  open={isInfoModalOpen} onClose={handleCloseInfoModal}>
        <DialogTitle>User Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedUser && (
              <Box sx={{ color: '#606060'}}>
                <p>Name: {selectedUser.displayName}</p>
                <p>Email: {selectedUser.email}</p>
                <p>District: {selectedUser.district}</p>
                <p>Upazila: {selectedUser.upazila}</p>
                <p>BloodGroup: {selectedUser.bloodGroup}</p>
              </Box>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInfoModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllUsers;
