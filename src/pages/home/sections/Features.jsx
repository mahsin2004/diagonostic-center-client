import Typography from "@mui/material/Typography";
import Marquee from "react-fast-marquee";
import Cart from "./Cart";
import Box from "@mui/material/Box";
import Cart1 from "./Cart1";
import Cart2 from "./Cart2";

const Features = () => {
  return (
    <Box sx={{mb: 11, mt: 5}}>
      <Typography sx={{ mb: 4 }} textAlign="center" variant="h4" fontWeight='bold' color="#606060">
        Mostly Booked Test
      </Typography>
      <Marquee speed={100}>
       <Cart></Cart>
       <Cart1></Cart1>
       <Cart2></Cart2>
      </Marquee>
    </Box>
  );
};

export default Features;
