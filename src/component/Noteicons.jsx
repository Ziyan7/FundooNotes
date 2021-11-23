import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddIconOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PaletteIconOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageIconOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveIconOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Noteicons = () => {
  const iconStyle = {
    width: "17px",
    // paddingRight : "30%"
  };
  return (
    <Grid container direction="row" justifyContent = "space-between" spacing={3} sx={{ p: "15px 0 0 30px" }}>
      <PaletteIconOutlinedIcon style={iconStyle} />
      <ImageIconOutlinedIcon style={iconStyle} />
      <ArchiveIconOutlinedIcon style={iconStyle} />
      <DeleteOutlineOutlinedIcon style={iconStyle} />
      <MoreVertOutlinedIcon />
    
    </Grid>
  );
};
export default Noteicons;
