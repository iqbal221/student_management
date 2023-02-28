import React from "react";
import Navbar from "../../Shared/Navbar";

import StudentForm from "./StudentForm";

const AddStudent = () => {
  return (
    <div className="addStudent">
      <Navbar></Navbar>
      <StudentForm></StudentForm>
    </div>
  );
};

export default AddStudent;
