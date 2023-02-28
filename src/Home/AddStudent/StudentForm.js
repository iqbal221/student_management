import React from "react";
import { useForm } from "react-hook-form";
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

const StudentForm = () => {
  const [select, setSelect] = React.useState("");
  const [division, setDivision] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddStudent = (data) => {
    console.log(data, { selectClass: select, selectDivision: division });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  const handleChangeDivision = (event: SelectChangeEvent) => {
    setDivision(event.target.value);
  };
  return (
    <Grid container>
      <Grid sx={{ pt: "65px" }} item xs={3}>
        <Sidebar></Sidebar>
      </Grid>
      <Grid item xs={9}>
        <h3 className="addStudent_heading">Add Student</h3>
        <form onSubmit={handleSubmit(handleAddStudent)}>
          <Grid container rowSpacing={1}>
            <Grid item xs={4}>
              <ListItem>
                <TextField
                  sx={{ width: "350px" }}
                  id="outlined-First Name-input"
                  label="First Name"
                  type="text"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  required
                />
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <TextField
                  sx={{ width: "350px" }}
                  id="outlined-Middle Name-input"
                  label="Middle Name"
                  type="text"
                  {...register("middleName", {
                    required: "Middle Name is required",
                  })}
                  required
                />
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <TextField
                  sx={{ width: "350px" }}
                  id="outlined-Last Name-input"
                  label="Last Name"
                  type="text"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  required
                />
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <FormControl sx={{ width: "350px" }}>
                  <InputLabel id="demo-Select-Class-helper-label">
                    Select Class
                  </InputLabel>
                  <Select
                    labelId="demo-Select-Class-helper-label"
                    id="demo-Select-Class-helper"
                    value={select}
                    label="Select Class"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">
                      <em>Select Class</em>
                    </MenuItem>
                    <MenuItem value={15}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <FormControl sx={{ width: "350px" }}>
                  <InputLabel id="demo-Select-Division-helper-label">
                    Select Division
                  </InputLabel>
                  <Select
                    labelId="demo-Select-Division-helper-label"
                    id="demo-Select-Division-helper"
                    value={division}
                    label="Select Division"
                    onChange={handleChangeDivision}
                    required
                  >
                    <MenuItem value="">
                      <em>Select Division</em>
                    </MenuItem>
                    <MenuItem value={1}>I</MenuItem>
                    <MenuItem value={2}>II</MenuItem>
                    <MenuItem value={3}>III</MenuItem>
                    <MenuItem value={4}>IV</MenuItem>
                    <MenuItem value={5}>V</MenuItem>
                    <MenuItem value={6}>VI</MenuItem>
                    <MenuItem value={7}>VII</MenuItem>
                    <MenuItem value={8}>VIII</MenuItem>
                    <MenuItem value={9}>IX</MenuItem>
                    <MenuItem value={10}>X</MenuItem>
                    <MenuItem value={11}>XI</MenuItem>
                    <MenuItem value={12}>XII</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <TextField
                  sx={{ width: "350px" }}
                  id="outlined-Roll Number in Digits-input"
                  label="Enter Roll Number in Digits"
                  type="text"
                  {...register("rollNumber", {
                    required: "Roll Number is required",
                  })}
                  required
                />
              </ListItem>
            </Grid>
          </Grid>
          <Grid sx={{ mt: "10px" }} container rowSpacing={1}>
            <Grid item xs={6}>
              <ListItem>
                <TextField
                  sx={{ width: "500px" }}
                  id="outlined-Address Line 1-input"
                  label="Address Line 1"
                  type="text"
                  {...register("address1", {
                    required: "Address is required",
                  })}
                  required
                />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <TextField
                  sx={{ width: "500px" }}
                  id="outlined-Address Line 2-input"
                  label="Address Line 2"
                  type="text"
                  {...register("address2", {
                    required: "Address is required",
                  })}
                  required
                />
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <TextField
                  sx={{ width: "500px" }}
                  id="outlined-Landmark-input"
                  label="Landmark"
                  type="text"
                  {...register("landmark", {
                    required: "Landmark is required",
                  })}
                  required
                />
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <TextField
                  sx={{ width: "500px" }}
                  id="outlined-City-input"
                  label="City"
                  type="text"
                  {...register("city", {
                    required: "City is required",
                  })}
                  required
                />
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <TextField
                  sx={{ width: "500px" }}
                  id="outlined-Pincode-input"
                  label="Pincode"
                  type="text"
                  {...register("pincode", {
                    required: "Pincode is required",
                  })}
                  required
                />
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                <Button
                  type="submit"
                  sx={{ width: "500px", background: "#FF2108", p: "15px" }}
                  variant="contained"
                >
                  Add Student
                </Button>
              </ListItem>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default StudentForm;
