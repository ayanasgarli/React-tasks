import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "30px",
          }}
        >
          Home
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/about"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "30px",
          }}
        >
          About
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/contact"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "30px",
          }}
        >
          Contact
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/admin"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "30px",
          }}
        >
          Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavbar;
