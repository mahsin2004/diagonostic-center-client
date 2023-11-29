import { NavLink, useLocation } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Person as PersonIcon } from "@mui/icons-material";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import List from "@mui/material/List";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Button from "@mui/material/Button";

const UserLinks = () => {
  const location = useLocation();

  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <NavLink
            to="userHome"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/userHome" ? "bold" : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              Dashboard
            </Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <NavLink
            to="userProfile"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/userProfile"
                    ? "bold"
                    : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              My Profile
            </Button>
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
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/appointments"
                    ? "bold"
                    : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              My Appointments
            </Button>
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
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/testResults"
                    ? "bold"
                    : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              Test Results
            </Button>
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};

export default UserLinks;
