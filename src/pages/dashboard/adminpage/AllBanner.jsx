import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Table from "../Table";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import CircularProgress from "@mui/material/CircularProgress";

const AllBanner = () => {
  const axiosPublic = useAxiosPublic();
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic
      .get("/banners")
      .then((res) => {
        const data = res.data;

        const rowsWithUniqueId = data.map((row, index) => ({
          ...row,
          id: index + 1, 
        }));

        if (rowsWithUniqueId.length > 0) {
          const columnsData = Object.keys(rowsWithUniqueId[0]).map((field) => ({
            field,
            headerName: field,
            flex: 1,
          }));

          setColumns(columnsData);
          setRows(rowsWithUniqueId);
        } else {
          console.warn("Empty data received from the API.");
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [axiosPublic]);

  return (
    <Container sx={{ mt: 11 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Table rows={rows} columns={columns}></Table>
      )}
    </Container>
  );
};

export default AllBanner;
