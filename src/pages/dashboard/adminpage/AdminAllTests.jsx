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
import { MdDelete, MdEdit } from "react-icons/md";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const AdminAllTests = () => {
    console.log(window.location.pathname)
  const axiosPublic = useAxiosPublic();
  const { data: tests = [], refetch} = useQuery({
    queryKey: ["adminAllTests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tests");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);

    axiosPublic.put(`/tests/delete/${id}`).then((res) => {
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
      <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#575859",
            mb: 4,
          }}
          variant="h4"
        >
          All Tests
        </Typography>
      </div>
      <div>
        <div>
          <TableContainer component={Paper}>
            <Table>
              {/* head */}
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ fontSize: 22, fontWeight: "bold" }}
                  ></TableCell>
                  <TableCell sx={{ fontSize: 22, fontWeight: "bold" }}>
                    Tests Name
                  </TableCell>
                  <TableCell sx={{ fontSize: 22, fontWeight: "bold" }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ fontSize: 22, fontWeight: "bold" }}>
                    Update
                  </TableCell>
                  <TableCell sx={{ fontSize: 22, fontWeight: "bold" }}>
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tests.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <NavLink to={`${item._id}`}>
                        <Button
                          sx={{ width: 20, height: 35 }}
                          variant="contained"
                          color="secondary"
                        >
                          <MdEdit />
                        </Button>
                      </NavLink>
                    </TableCell>
                    <TableCell>
                      <Button
                        sx={{ width: 20, height: 35 }}
                        onClick={() => handleDelete(item._id)}
                        variant="contained"
                        color="secondary"
                      >
                        <MdDelete />
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

export default AdminAllTests;
