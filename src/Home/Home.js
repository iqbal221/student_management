import React from "react";
import AddStudent from "./AddStudent/AddStudent";
import ManageStudent from "./ManageStudent.js/ManageStudent";

const Home = () => {
  return (
    <div>
      <AddStudent></AddStudent>
      <ManageStudent></ManageStudent>
    </div>
  );
};

export default Home;
