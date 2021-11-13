import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import AppBar from "../component/Appbar.jsx";
import Notes from "../component/Notes";
import DrawerBar from "../component/Drawer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerBar openDrawer={handleDrawerOpen} open={open} />
      <AppBar openDrawer={handleDrawerOpen}  />
      <Box sx={{ flexGrow:1, p: 4 }}>
        <DrawerHeader/>
        <Notes/>
      </Box>
    </Box>
  );
}