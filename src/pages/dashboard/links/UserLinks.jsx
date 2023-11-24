import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Person as PersonIcon } from "@mui/icons-material";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import List from "@mui/material/List";

const UserLinks = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <NavLink
            to="userProfile"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <ListItemText primary="My Profile" />
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BookRoundedIcon />
          </ListItemIcon>
          <NavLink
            to="appointments"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <ListItemText primary="My Upcoming Appointments" />
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FactCheckRoundedIcon />
          </ListItemIcon>
          <NavLink
            to="testResults"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <ListItemText primary="Test Results" />
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};

export default UserLinks;
