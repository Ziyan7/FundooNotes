import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, TextField, InputAdornment, Grid, Paper } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/images/download.jfif";
import SettingsIcon from "@material-ui/icons/Settings";
import ViewListIcon from "@material-ui/icons/ViewList";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from '@material-ui/icons/Apps';

const Topbar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Appbar = ({ openDrawer }) => {
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
              sx={{
                marginRight: "36px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logo}
              style={{ width: "1%", marginRight: "10px" }}
              alt="Loading"
            />
            <Typography variant="h6">FundooNotes</Typography>
            <TextField
              placeholder="Search…"
              style={{ width: "20%", margin: "auto 50px" }}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: "black" }} />
                  </InputAdornment>
                ),
                style: { color: "black" },
              }}
            />
            <SettingsIcon style={{ marginLeft: "3%" }} />
            <ViewListIcon style={{ marginLeft: "25px" }} />
            <AppsIcon style={{ marginLeft: "25px" }} />
            <AccountCircleIcon style={{ marginLeft: "25px" ,fontSize : "45px"}} />
          </Toolbar>
        </Paper>
      </Grid>
    </Topbar>
  );
};

export default Appbar;
