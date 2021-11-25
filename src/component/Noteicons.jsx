import { Grid } from "@mui/material";
import PaletteIconOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageIconOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton, Tooltip } from "@mui/material";

const Noteicons = ({ handleTrash, note }) => {
  const iconStyle = {
    width: "17px",
    // paddingRight : "30%"
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      spacing={3}
      sx={{ p: "15px 0 0 30px" }}
    >
      {console.log("hgjhthfrhtfh")}
      {console.log(note)}
      <Tooltip title="Change Color">
        <IconButton size="small">
          <PaletteIconOutlinedIcon style={iconStyle} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Add image">
        <IconButton size="small">
          <ImageIconOutlinedIcon style={iconStyle} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton size="small">
          <DeleteOutlineOutlinedIcon
            style={iconStyle}
            onClick={() => handleTrash(note)}
          />
        </IconButton>
      </Tooltip>
    </Grid>
  );
};
export default Noteicons;
