import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LightbulbIconOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsIconOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import EditIconOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverIconOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import ArchiveIconOutlinedIcon from "@material-ui/icons/ArchiveOutlined";

import { useDispatch } from "react-redux";
import {  setTrashValue } from "../redux/action/index.js";

const drawerWidth = 170;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: "10px",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const StyledButton = styled(ListItem)`
  padding-left: 1px;
  &:hover {
    background-color: #dcdcdc;
  }
  &:active {
    background-color: #feefc3;
  }
`;

function DrawerBar({ open, openDrawer ,handleTitle}) {
  const dispatch = useDispatch();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader />
      <Divider />
      <List>
        <StyledButton>
          <ListItem
            onMouseOver={() => openDrawer()}
            onMouseOut={() => openDrawer()}
            onClick={() => {handleTitle("Fundoo Notes");dispatch(setTrashValue("false"))}}
          >
            <ListItemIcon>
              <LightbulbIconOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
        </StyledButton>
        <StyledButton>
          <ListItem
            onMouseOver={() => openDrawer()}
            onMouseOut={() => openDrawer()}
            onClick={() => handleTitle("Reminders")}
          >
            <ListItemIcon>
              <NotificationsIconOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Reminders" />
          </ListItem>
        </StyledButton>
        <StyledButton>
          <ListItem
            onMouseOver={() => openDrawer()}
            onMouseOut={() => openDrawer()}
            onClick={() => handleTitle("Edit Notes")}
          >
            <ListItemIcon>
              <EditIconOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Notes" />
          </ListItem>
        </StyledButton>
        <StyledButton>
          <ListItem
            onMouseOver={() => openDrawer()}
            onMouseOut={() => openDrawer()}
            onClick={() => handleTitle("Archive")}
          >
            <ListItemIcon>
              <ArchiveIconOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
        </StyledButton>
        <StyledButton>
          <ListItem
            onMouseOver={() => openDrawer()}
            onMouseOut={() => openDrawer()}
            onClick={() => { handleTitle("Trash") ; dispatch(setTrashValue("true"))}}
            >
            <ListItemIcon>
              <DeleteForeverIconOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItem>
        </StyledButton>
      </List>
      <Divider />
    </Drawer>
  );
}

export default DrawerBar;
