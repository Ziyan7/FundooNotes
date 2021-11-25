import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import AppBar from "../component/Appbar.jsx";
import Notes from "../component/Notes";
import DrawerBar from "../component/Drawer";
import { useDispatch } from "react-redux";
import { setAllNotes , setTrash } from "../redux/action/index.js";
import { userNotes } from "../service/signUp.service";
import CreateNotes from "../component/CreateNotes.jsx";
import { useSelector } from 'react-redux';
import TrashBox from "../component/TrashBox.jsx";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const trash = useSelector((state) => state.allNotes.trashState);
  const [title, setTitle] = useState("Fundoo Notes");

  const handleDrawerOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    userNotes()
      .then((response) => {
        console.log("myResponse")
        console.log(response)
        dispatch(setAllNotes(response.data.filter(item=> !item.isTrash)));
        dispatch(setTrash(response.data.filter((item) => item.isTrash)))
      })
      .catch((error) => {
        console.log(error);
        // alert("No Available Notes");
      });
  }, []);

  
  const handleTitle = (title) => {
    setTitle(title);
    console.log(title);
  };

  const [view, setView] = useState(true);
  const handleView = () => {
    setView((prev) => {
      return !prev;
    });
  };


  return (
    <Box sx={{ display: "flex" }}>
      <DrawerBar
        openDrawer={handleDrawerOpen}
        open={open}
        handleTitle={handleTitle}
      />
      <AppBar
        openDrawer={handleDrawerOpen}
        title={title}
        handleView={handleView}
        view={view}
        
      />
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <DrawerHeader />
        {trash === "true" ? <TrashBox/> : <> <CreateNotes /> <Notes view={view} /> </> }
      </Box>
    </Box>
  );
};
export default Dashboard;
