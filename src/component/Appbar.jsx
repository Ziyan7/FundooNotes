import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, TextField, InputAdornment, Grid, Paper } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/images/download.jfif";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import RefreshIcon from "@material-ui/icons/Refresh";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchNotes } from "../redux/action/index.js";
import { useSelector } from "react-redux";

const Topbar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const iconStyle = {
  paddingRight: "20px",
};

const Appbar = ({ openDrawer }) => {
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
              style={{ width: "1%", paddingRight: "10px", paddingLeft: "36px" }}
              alt="Loading"
            />
            <Typography variant="h6">FundooNotes</Typography>
            <TextField
              placeholder="Search…"
              style={{ width: "28%", margin: "auto 50px" }}
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
            <Grid container direction={"row"} sx={{ pl: 6 }}>
              <Grid>
                <RefreshIcon style={iconStyle} />
                <ViewStreamIcon style={iconStyle} />
                <SettingsIcon style={iconStyle} />
              </Grid>
              <Grid sx={{ pl: 6 }}>
                <AppsIcon style={iconStyle} />
                <AccountCircleIcon />
              </Grid>
            </Grid>
          </Toolbar>
        </Paper>
      </Grid>
    </Topbar>
  );
};

export default Appbar;
