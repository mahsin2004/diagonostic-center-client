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
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useData from "../../../hook/useData";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const AllBanner = () => {
  const axiosPublic = useAxiosPublic();
  const axiosData = useData();

  const { data: banners = [], refetch } = useQuery({
    queryKey: ["banners12"],
    queryFn: async () => {
      const res = await axiosPublic.get("/banners");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosData.delete(`/banners/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Successfully",
              text: "Banner Deleted",
              icon: "success",
              confirmButtonText: "Okay",
            });
            refetch();
          }
        });
      }
    });
  };

  const makeAdmin = (id) => {
    axiosData.patch(`/banners/admin/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Successfully",
          text: "Status Update",
          icon: "success",
          confirmButtonText: "Okay",
        });
      }
    });
  };

  return (
    <div>
      <Container sx={{ mt: 10 }}>
        <div>
          <Typography variant="h4">Total Banners: {banners.length}</Typography>
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
                    <TableCell>Status</TableCell>
                    <TableCell>ACTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {banners.map((item, index) => (
                    <TableRow key={item._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        {item.isActive === true ? (
                          <Button sx={{width: 20, height: 'auto'}} variant="contained"
                          color="primary">Active</Button>
                        ) : (
                          <Button sx={{width: 20, height: 'auto'}}
                            onClick={() => makeAdmin(item._id)}
                            variant="contained"
                            color="secondary"
                          >
                            False
                          </Button>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button sx={{width: 20, height: 35}}
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
    </div>
  );
};

export default AllBanner;
