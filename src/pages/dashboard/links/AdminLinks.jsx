import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BallotIcon from "@mui/icons-material/Ballot";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GroupIcon from "@mui/icons-material/Group";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";

const AdminLinks = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <NavLink
            to="allUsers"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <ListItemText primary="All Users" />
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
            <ListItemText primary="Add a Test" />
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
            <ListItemText primary="Reservation" />
          </NavLink>
        </ListItem>
        <NavLink
          to="addBanner"
          style={{
            textDecoration: "none",
            color: "#3c3c3c",
          }}
        >
          <ListItem
            sx={{
              backgroundColor:
                location.pathname === "addBanner" ? "#c2c2c2" : "",
            }}
          >
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Add banner" />
          </ListItem>
        </NavLink>

        <ListItem>
          <ListItemIcon>
            <FilterFramesIcon />
          </ListItemIcon>
          <NavLink
            to="allBanners"
            style={{ textDecoration: "none", color: "#3c3c3c" }}
          >
            <ListItemText primary="All Banners" />
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};

export default AdminLinks;
