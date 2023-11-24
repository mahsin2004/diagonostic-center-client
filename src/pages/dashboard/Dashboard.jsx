// Dashboard.jsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded";

import { NavLink, Outlet } from "react-router-dom";
import Hidden from "@mui/material/Hidden";
import Divider from "@mui/material/Divider";


const Dashboard = () => {
  const [open, setOpen] = React.useState(window.innerWidth >= 991);

  const handleDrawerOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 991);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: "16px", display: { xs: "block", lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Health Care
          </Typography>
          <Hidden mdDown>
            <img
              src="https://i.postimg.cc/B6WgpTx8/output-onlinepngtools.png"
              alt="Logo"
              style={{ height: 42, marginRight: 6 }}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
          display: { lg: "block", xs: open ? "block" : "none" },
        }}
        open={open}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        ></Toolbar>
        <List>
          
          <Divider sx={{ mt: 2, mb: 2 }} />
          <ListItem>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "#3c3c3c" }}
            >
              <ListItemText primary="Home" />
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MedicalInformationRoundedIcon />
            </ListItemIcon>
            <NavLink style={{ textDecoration: "none", color: "#3c3c3c" }}>
              <ListItemText primary="All Testes" />
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
      <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Dashboard;
