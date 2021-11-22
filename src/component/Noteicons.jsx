import {
   Grid,
   List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";

import  AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddIconOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import PaletteIconOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageIconOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveIconOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


const Noteicons = () => {
  const iconStyle = {
    width: "17px",
    paddingRight : "14%"
  };
  return (
    <Grid container spacing={3} sx ={{p : "10px 0 10px 10px" }}>
      <ListItem >
        <ListItemIcon>
          < AddAlertOutlinedIcon style = {iconStyle}/>
          <PersonAddIconOutlinedIcon style = {iconStyle}/>
          <PaletteIconOutlinedIcon style = {iconStyle}/>
          <ImageIconOutlinedIcon style = {iconStyle}/>
          <ArchiveIconOutlinedIcon style = {iconStyle}/>
          <MoreVertOutlinedIcon/>

        </ListItemIcon>
      </ListItem>
    </Grid>
  );
};
export default Noteicons;
