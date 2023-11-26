import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const NewsLetter = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <Box sx={{ mb: 5 }}>
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight="bold"
          color="#606060"
        >
          Our Technology
        </Typography>
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={6}>
          <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
            <Paper
              elevation={3}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                src="https://i.postimg.cc/GpKJjd4s/x-ray.jpg"
                alt="Image Description"
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    style={{
                      width: "2.875rem",
                      height: "2.875rem",
                      border: "2px solid white",
                      borderRadius: "50%",
                    }}
                    src="https://i.ibb.co/Vq2ZcmV/p3.jpg"
                    alt="Avatar"
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{ color: "#313030", fontWeight: "bold" }}
                    >
                      Heath Care
                    </Typography>
                    <Typography variant="caption" style={{ color: "#313030" }}>
                      Jan 09, 2021
                    </Typography>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  zIndex: 1,
                  padding: "20px",
                }}
              >
                
              </div>
            </Paper>
          </Link>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
            <Paper
              elevation={3}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                src="https://i.postimg.cc/13ZGhf6q/chair-1.png"
                alt="Image Description"
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    style={{
                      width: "2.875rem",
                      height: "2.875rem",
                      border: "2px solid white",
                      borderRadius: "50%",
                    }}
                    src="https://i.ibb.co/WVYzLDQ/p5.jpg"
                    alt="Avatar"
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <Typography
                      variant="h6"
                      style={{ color: "#313030", fontWeight: "bold" }}
                    >
                      Health Care
                    </Typography>
                    <Typography variant="caption" style={{ color: "#313030" }}>
                      May 30, 2021
                    </Typography>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  zIndex: 1,
                  padding: "20px",
                }}
              >
                
              </div>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsLetter;
