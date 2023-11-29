import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useQuery } from "@tanstack/react-query";
import useBooked from "../../../hook/useBooked";
import { useState } from "react";
import { useEffect } from "react";

const AdminDashboard = () => {
  const [totalUser, setTotalUser] = useState([]);
  const [totalTests, setTotalTests] = useState([]);
  const [totalAppointments, setTotalAppointments] = useState([]);
  const axiosBooked = useBooked();
  const { data: banners = [] } = useQuery({
    queryKey: ["banners10"],
    queryFn: async () => {
      const res = await axiosBooked.get("/banners");
      return res.data;
    },
  });

  useEffect(() => {
    axiosBooked.get("/users").then(res => {
        setTotalUser(res.data);
    })
  },[axiosBooked])
  useEffect(() => {
    axiosBooked.get("/tests").then(res => {
        setTotalTests(res.data);
    })
  },[axiosBooked])
  useEffect(() => {
    axiosBooked.get("/bookings").then(res => {
        setTotalAppointments(res.data);
    })
  },[axiosBooked])

  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <Box>
        <Grid container spacing={2} sx={{ gap: 2 }}>
          <Grid
            item
            lg={3}
            sx={{
              fontSize: '25px',
              textAlign: 'center',
              backgroundColor: "#3491ca",
              pt: 7,
              pb: 8,
              borderRadius: "10px",
              color: "white",
            }}
          >
            Total Users: <br />
            {totalUser.length}
          </Grid>
          <Grid
            item
            lg={4}
            sx={{
              fontSize: '25px',
              textAlign: 'center',
              backgroundColor: "#269492",
              pt: 5,
              pb: 5,
              borderRadius: "10px",
              color: "white",
            }}
          >
            Total Tests: <br />
            {totalTests.length}
          </Grid>
          <Grid
            item
            lg={4}
            sx={{
              fontSize: '25px',
              textAlign: 'center',
              backgroundColor: "#5f46bb",
              pt: 5,
              pb: 5,
              borderRadius: "10px",
              color: "white",
            }}
          >
            Total Appointments: <br />
            {totalAppointments.length}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid >
            <Container sx={{ mt: 10}}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#575859",
                  mb: 4,
                }}
                variant="h5"
              >
                Recently Added Banners
              </Typography>
              <div>
                <div>
                  <TableContainer component={Paper}>
                    <Table>
                      {/* head */}
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell>NAME</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {banners.map((item, index) => (
                          <TableRow key={item._id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                              {item.isActive === true ? (
                                <Button
                                  sx={{ width: 20, height: "auto" }}
                                  variant="contained"
                                  color="primary"
                                >
                                  Active
                                </Button>
                              ) : (
                                <Button
                                  sx={{ width: 20, height: "auto" }}
                                  variant="contained"
                                  color="secondary"
                                >
                                  False
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
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
