import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
} from "@mui/material";
import { TextField } from "@mui/material";

import { SelectChangeEvent } from "@mui/material/Select";
import Sidebar from "../../Shared/Sidebar";

const StudentTable = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#FF2108",
      color: "white",
      fontSize: 16,
      ml: "10px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFFCFB",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <Grid container>
      <Grid sx={{ pt: "55px" }} item xs={3}>
        <Sidebar></Sidebar>
      </Grid>
      <Grid item xs={9} sx={{ pl: "15px", pr: "15px" }}>
        <h3 className="manageStudent_heading">Manage Student</h3>

        <TableContainer component={Paper}>
          <Table sx={{ width: "full" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ pl: "50px" }} className="tableHead">
                  Name
                </StyledTableCell>
                <StyledTableCell align="center">Class</StyledTableCell>
                <StyledTableCell align="center">Roll</StyledTableCell>
                <StyledTableCell align="center">
                  View / Edit / Delete
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    sx={{ pl: "50px" }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">
                    <VisibilityOutlinedIcon sx={{ color: "#FF2108" }} />
                    <BorderColorOutlinedIcon
                      sx={{ ml: "15px", mr: "15px", color: "#FF2108" }}
                    />
                    <DeleteOutlineOutlinedIcon sx={{ color: "#FF2108" }} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default StudentTable;
