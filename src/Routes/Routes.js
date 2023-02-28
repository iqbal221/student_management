import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";

import AddStudent from "../Home/AddStudent/AddStudent";
import ManageStudent from "../Home/ManageStudent.js/ManageStudent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <AddStudent></AddStudent>,
      },
      {
        path: "/manageStudent",
        element: <ManageStudent></ManageStudent>,
      },
    ],
  },
]);
