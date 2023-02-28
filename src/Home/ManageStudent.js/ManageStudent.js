import React from "react";
import Navbar from "../../Shared/Navbar";
import StudentTable from "./StudentTable";

const ManageStudent = () => {
  return (
    <div className="manageStudent">
      <Navbar></Navbar>
      <StudentTable></StudentTable>
    </div>
  );
};

export default ManageStudent;
