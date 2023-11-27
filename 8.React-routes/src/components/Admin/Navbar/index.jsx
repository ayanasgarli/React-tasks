import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/home"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "30px",
          }}
        >
          Site
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
          Dashboard
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/admin/categories"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "30px",
          }}
        >
          Categories
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/admin/suppliers"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "30px",
          }}
        >
          Suppliers
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
