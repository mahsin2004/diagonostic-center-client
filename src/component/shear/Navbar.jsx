import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useAuth from "../../hook/useAuth";
import Grid from "@mui/material/Grid";
import toast from "react-hot-toast";
import Hidden from "@mui/material/Hidden";

const pages = [
  { label: "Home", path: "/" },
  { label: "All Tests", path: "/allTests" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Contact us", path: "/contactUs" },
];

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
        toast.success("User successfully logged out");
      })
      .catch((error) => console.error(error));
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
        <Hidden mdDown>
            <img
              src="https://i.postimg.cc/B6WgpTx8/output-onlinepngtools.png"
              alt="Logo"
              style={{ height: 52, marginRight: 6 }}
            />
          </Hidden>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 10,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Health Care
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={page.path}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight:
                        location.pathname === page.path ? "bold" : "normal",
                    }}
                  >
                    {page.label}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={NavLink}
                to={page.path}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                  fontWeight:
                    location.pathname === page.path ? "bold" : "normal",
                }}
              >
                {page.label}
              </Button>
            ))}
            {user ? (
              <Button onClick={handleLogOut} color="inherit">
                Log Out
              </Button>
            ) : (
              ""
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box>
              {user ? (
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    gridTemplateColumns: "1fr auto",
                    marginRight: 1,
                    textAlign: "right",
                  }}
                >
                  <Typography
                    sx={{ color: "inherit", fontSize: 12, marginRight: 0.4 }}
                    variant="h6"
                  >
                    {`${user.displayName}`}
                    <br />
                    {`${user.email}`}
                  </Typography>
                  <Avatar alt="Remy Sharp" src={user.photoURL} />
                </Grid>
              ) : (
                 <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Button sx={{
                    fontWeight:
                    location.pathname === "/login" ? "bold" : "normal",
                  }} color="inherit">Login Now</Button>
                </NavLink>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
