import React, { useState,useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import AppBar from "../component/Appbar.jsx";
import Notes from "../component/Notes";
import DrawerBar from "../component/Drawer";
import { useDispatch } from "react-redux";
import { setAllNotes } from "../redux/action/index.js";
import { userNotes } from "../service/signUp.service";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    userNotes()
      .then((response) => {
        dispatch(setAllNotes(response.data));
      })
      .catch((error) => {
        console.log(error);
        // alert("No Available Notes");
      });
  }, [dispatch]);

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerBar openDrawer={handleDrawerOpen} open={open} />
      <AppBar openDrawer={handleDrawerOpen}  />
      <Box sx={{ flexGrow:1, p: 4 }}>
        <DrawerHeader/>
        <Notes />
      </Box>
    </Box>
  );
}
export default  Dashboard;