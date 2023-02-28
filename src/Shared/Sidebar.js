import React from "react";

import { List, ListItem, ListItemButton } from "@mui/material";

const Sidebar = () => {
  return (
    <div>
      <List>
        <ListItem className="sidebar">
          <ListItemButton href="/">Add Student</ListItemButton>
        </ListItem>
        <ListItem className="sidebar">
          <ListItemButton href="/manageStudent">Manage Student</ListItemButton>
        </ListItem>
        <ListItem className="sidebar">
          <ListItemButton>Logout</ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
