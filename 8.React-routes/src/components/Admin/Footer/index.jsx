import { Paper, Typography } from "@mui/material";

const AdminFooter = () => {
  return (
    <Paper
      square
      elevation={3}
      style={{
        marginTop: "450px",
        textAlign: "center",
        padding: "20px",
        background: "#1976D2",
        color: "white",
      }}
    >
      <Typography variant="body1">Admin Footer</Typography>
    </Paper>
  );
};

export default AdminFooter;
