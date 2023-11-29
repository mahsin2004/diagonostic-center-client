
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";

const TestResult = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: booked = [] } = useQuery({
    queryKey: ["bookingsDeliver"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookings/${user.email}`);
      return res.data;
    },
  });

  const deliverTests = booked.filter((test) => test.report === "delivered");
  console.log(deliverTests);

  return (
    <Container sx={{ py: 6 }} component="main" maxWidth="md">
      <Paper
        elevation={1}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#575859",
            mb: 4,
          }}
          variant="h4"
        >
          Tests Results
        </Typography>
        {deliverTests.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              {/* head */}
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                    NAME
                  </TableCell>
                  <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                    Report
                  </TableCell>
                  <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                    Report download
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deliverTests.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.report}</TableCell>
                    <TableCell>
                      <a
                        href={item.reportLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        click here
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: "bold",
              color: "red",
              mt: 4,
              textAlign: "center",
            }}
          >
            No tests were delivered
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default TestResult;
