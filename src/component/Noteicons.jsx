import React, { useState } from "react";
import { Grid, Popover } from "@mui/material";
import PaletteIconOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageIconOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton, Tooltip } from "@mui/material";
import Circle from "@mui/icons-material/Circle";
import { useDispatch } from "react-redux";
import { setUndoNote } from "../redux/action/index";
import { setColor } from "../service/notes.service";
const Noteicons = ({ handleTrash, note , setColour}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const iconStyle = {
    width: "17px",
    // paddingRight : "30%"
  };

  const handleselectedColour = (noteColor) => {
    console.log(noteColor)
    let data = {
      ...note,
      color: noteColor,
    };
    console.log(data.color)
    setColor(data, note._id)
      .then((res) => {
        setColour(res.color)
      })
      .catch((res) => console.log(res));
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      spacing={3}
      sx={{ p: "15px 0 0 30px" }}
    >
      <Tooltip title="Change Color">
        <IconButton size="small">
          <PaletteIconOutlinedIcon style={iconStyle} onClick={handleClick} />
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
            onClick={() => {
              handleTrash(note);
              dispatch(setUndoNote(true));
            }}
          />
        </IconButton>
      </Tooltip>

      <Popover
     
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Grid container sx={{ p: 1 }}>
          {["FFFbFB",
            "#fafcfb",
            "#F28B82",
            "#FBBC05",
            "#FFF475",
            "	#CCFF90",
            "#A7FFEB",
            "#CBF0F8",
            "#AECBFA",
            "#D7AEFB",
            "#FDCFE8",
            "#E6C9A8",
            "#E8EAED",
          ].map((noteColor) => {
            return (
              <Grid item xs={12} sm={6} md={3} sx={{ width: "11px" }}>
                <Circle
                  style={{ color: noteColor, fontSize: 29 }}
                  onClick={() => handleselectedColour(noteColor)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Popover>
    </Grid>
  );
};
export default Noteicons;
