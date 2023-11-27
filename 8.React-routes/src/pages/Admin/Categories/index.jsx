
import { React, useEffect, useState } from "react";
import { getAllCategories } from "../../../services/api/requests/categoryRequests";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <>
      <Button
        style={{ margin: "15px" }}
        color="primary"
        variant="outlined"
        component={Link}
        to="/category/add"
      >
        Add Category
      </Button>
      <TableContainer sx={{ width: "70%", margin: "auto" }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories &&
              categories.map((category, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {category.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell align="left">{category.description}</TableCell>
                  <TableCell align="left">
                    <Button color="secondary" variant="contained">
                      <Link
                        style={{ color: "white" }}
                        to={`/category/${category.id}`}
                      >
                        Info
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Categories;
