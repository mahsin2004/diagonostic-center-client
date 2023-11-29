import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BallotIcon from "@mui/icons-material/Ballot";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GroupIcon from "@mui/icons-material/Group";
import { NavLink, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Button from "@mui/material/Button";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded";

const AdminLinks = () => {
  const location = useLocation();
  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <NavLink
            to="adminHome"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/adminHome" ? "bold" : "normal",
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
            <GroupIcon />
          </ListItemIcon>
          <NavLink
            to="allUsers"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/allUsers"
                    ? "bold"
                    : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              All Users
            </Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MedicalServicesIcon />
          </ListItemIcon>
          <NavLink
            to="addTest"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/addTest"
                    ? "bold"
                    : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              Add a Test
            </Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MedicalInformationRoundedIcon />
          </ListItemIcon>
          <NavLink
            to="allTests"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/allTests"
                    ? "bold"
                    : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              All Tests
            </Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BallotIcon />
          </ListItemIcon>
          <NavLink
            to="reservation"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/reservation"
                    ? "bold"
                    : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              Reservation
            </Button>
          </NavLink>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <NavLink
            to="addBanner"
            style={{
              textDecoration: "none",
              color: "#3c3c3c",
            }}
          >
            <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/addBanner"
                    ? "bold"
                    : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              Add A banner
            </Button>
          </NavLink>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <FilterFramesIcon />
          </ListItemIcon>
          <NavLink
            to="allBanners"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
             <Button
              sx={{
                fontWeight:
                  location.pathname === "/dashboard/allBanners"
                    ? "bold"
                    : "normal",
                color: "#3c3c3c",
                ml: -3,
              }}
            >
              All Banners
            </Button>
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};

export default AdminLinks;
