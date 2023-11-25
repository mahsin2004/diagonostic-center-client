import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Error = () => {
  return (
    <div>
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <img
            style={{ height: 200 }}
            src="https://i.postimg.cc/hPRLVL8b/error1.png"
            alt="Image"
          />

          <Typography sx={{mt: 3, color: 'black', fontWeight: "bold" }}>Sorry, we could not find this page.</Typography>
          <Link to="/">
            <Button sx={{mt: 3, backgroundColor: "yellow", fontWeight: "bold", color: "black"}}>Back to homepage</Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Error;
