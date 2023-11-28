import { useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Grid, Pagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 6;

const AllTests = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tests = [] } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tests");
      return res.data;
    },
  });

  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedTests = tests.slice(startIndex, endIndex);

  

  return (
    <Container maxWidth="lg" sx={{ my: 15 }}>
      <Grid container spacing={3}>
        {paginatedTests.map((test) => (
          <Grid item lg={4} key={test._id}>
            <Paper elevation={4}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: 8,
              }}
            >
              <img
                src={test.image}
                alt="image"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <CardContent style={{ flex: "1 0 auto" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "#1C1B1B",
                    fontSize: "24px",
                    fontWeight: 600,
                    marginTop: 4,
                    marginBottom: 2,
                  }}
                >
                  {test.title}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "#1c1b1b99",
                    fontSize: "18px",
                    maxHeight: "120px",
                    lineHeight: "1.6",
                    overflow: "hidden",
                  }}
                  gutterBottom
                >
                  {test.shortDescription}
                </Typography>

                <div>
                  <Typography variant="h6" fontWeight="bold" color="#3e3d3d">
                    Available dates: {test.availableDates}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" fontWeight="bold" color="#3e3d3d">
                    Slots available: {test.slots}
                  </Typography>
                </div>
              </CardContent>

              <CardActions style={{ marginBottom: 6, justifyContent: "center" }}>
                <Link to= {`/details/${test._id}`}>
                  <Button
                    style={{
                      backgroundColor: "#00bcd4",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      padding: "9px",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "#00acc1",
                      },
                    }}
                  >
                    View Details
                  </Button>
                </Link>
              </CardActions>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(tests.length / ITEMS_PER_PAGE)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        sx={{ marginTop: 8, display: "flex", justifyContent: "center" }}
      />
    </Container>
  );
};

export default AllTests;
