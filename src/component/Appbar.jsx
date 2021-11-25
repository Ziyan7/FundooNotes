import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, TextField, InputAdornment, Grid, Paper } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/images/download.jfif";
import SettingsIconOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AccountCircleIconOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import RefreshIcon from "@material-ui/icons/Refresh";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchNotes } from "../redux/action/index.js";
import { useSelector } from "react-redux";
import GridViewIconOutlinedIcon from "@mui/icons-material/GridViewOutlined";

const Topbar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const iconStyle = {
  paddingRight: "30px",
};

const Appbar = ({ openDrawer, title,handleView,view  }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.allNotes.noteState);
  console.log(notes);
  const handleSearch = (event) => {
    dispatch(
      searchNotes(
        notes.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        })
      )
    );
  };
  useEffect(() => {
    dispatch(searchNotes(notes));
  }, [notes]);


  return (
    <Topbar>
      <Grid>
        <Paper elavation={5} style={{ width: "250%" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => openDrawer()}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logo}
              style={{ width: "1%", paddingRight: "10px", paddingLeft: "25px" }}
              alt="Loading"
            />
            <Typography sx={{ width: "6%" }} variant="h6">
              {title}
            </Typography>
            <TextField
              placeholder="Search…"
              style={{ width: "28%" , paddingLeft : "20px" }}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: "black" }} />
                  </InputAdornment>
                ),
                style: { color: "black" },
              }}
              onMouse
              onChange={(event) => handleSearch(event)}
            />
            <Grid container direction={"row"} sx={{ pl: 12 }}>
              <Grid>
                <RefreshIcon style={iconStyle} />
                {view ? (
                
                    <ViewAgendaOutlinedIcon
                    style={iconStyle}
                    onClick={() => {
                      handleView();
                    }}
                  />
                ) : (
                  <GridViewIconOutlinedIcon
                  style={iconStyle}
                  onClick={() => {
                    handleView();
                  }}
                  />
                )}

                <SettingsIconOutlinedIcon style={iconStyle} />
              </Grid>
              <Grid sx={{ pl: 6 }}>
                <AppsIcon style={iconStyle} />
                <AccountCircleIconOutlinedIcon />
              </Grid>
            </Grid>
          </Toolbar>
        </Paper>
      </Grid>
    </Topbar>
  );
};

export default Appbar;
