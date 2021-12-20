import MuiAppBar from "@mui/material/AppBar";
import {
  Toolbar,
  TextField,
  InputAdornment,
  Grid,
  Paper,
  Popover,
  Button,
  Avatar,
} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/images/logo.png";
import SettingsIconOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import RefreshIcon from "@material-ui/icons/Refresh";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchNotes } from "../redux/action/index.js";
import { useSelector } from "react-redux";
import GridViewIconOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Redirect } from "react-router";

const Topbar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const iconStyle = {
  paddingRight: "30px",
};

const Appbar = ({ openDrawer, title, handleView, view }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.allNotes.noteState);
  const [logout, setLogout] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setLogout(true);
  };

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
              style={{ width: "1.5%" , paddingLeft : "10px"}}
              alt="Loading"
            />
            <Typography sx={{ width: "6%" , paddingRight: "50px"}} variant="h6">
              {title}
            </Typography>
            <TextField
              placeholder="Search…"
              id="searchBar"
              style={{ width: '27%'  , backgroundColor :'#f1f1f1'}}
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { color: "black" },
              }}
              onChange={(event) => handleSearch(event)}
            />
            <Grid container direction={"row"} sx={{ pl: 12 }}>
              <Grid  >
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
              <Grid  sx={{ pl: 6  }} >
                <Grid container direction={"row"}>
                <AppsIcon style={iconStyle} />
                <Avatar
                  sx={{
                    bgcolor: "purple",
                    fontSize: "10px",
                    width: 28,
                    height: 28,
                  }}
                  onClick={handleClick}
                >
                  AZ
                </Avatar>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Paper>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Grid>
            <Button onClick={handleLogout}>Logout</Button>
          </Grid>
        </Popover>
      </Grid>
      {logout ? <Redirect to="/login" /> : null}
    </Topbar>
  );
};

export default Appbar;
