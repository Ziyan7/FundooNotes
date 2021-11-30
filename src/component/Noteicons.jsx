import React, { useState } from "react";
import { Grid, Popover } from "@mui/material";
import PaletteIconOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageIconOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton, Tooltip } from "@mui/material";
import Circle from "@mui/icons-material/Circle";
import { useDispatch } from "react-redux";
import { setUndoNote, setUpdate } from "../redux/action/index";
import { setColor, updateNote, setImage } from "../service/notes.service";

const Noteicons = ({ handleTrash , note,  index }) => {
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
    
  };

  const handleImage = (imageName) => {
    let data = {
      ...note,
      image: imageName,
    };
    console.log("image testing.....")
    console.log(note)
    updateNote(data, note._id)
      .then((res) => {
        console.log("update problemssssssssssssssssssssss");
        console.log(res)
        dispatch(setUpdate({ data: res, index: index }));
      })
      .catch((err) => console.log(err));
  };

  const handleselectedColour = (noteColor) => {
    let data = {
      ...note,
      color: noteColor,
    };
    
    console.log(note);
    setColor(data, note._id)
      .then((res) => {
        dispatch(setUpdate({ data: res, index: index }));
      })
      .catch((res) => console.log(res));
  };
 
  const fileHandler = (event) => {
    console.log(note)
    const fd = new FormData();
    fd.append("image", event.target.files[0], event.target.files[0].name);
    setImage(fd)
      .then((res) => {
        console.log(res)
        console.log("scope test")
        console.log(note)
        handleImage(res.filename);
        console.log("backend");
        console.log(res.filename);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      spacing={3}
      sx={{ p: "20px 0 5px 30px" }}
    >
      <Tooltip title="Change Color">
        <IconButton size="small">
          <PaletteIconOutlinedIcon style={iconStyle} onClick={handleClick} />
        </IconButton>
      </Tooltip>

      <input
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
        onChange={  fileHandler }
      />
      <label htmlFor="raised-button-file">
        <Tooltip title="Upload Image">
          <IconButton component="span">
            <ImageIconOutlinedIcon style={iconStyle} />
          </IconButton>
        </Tooltip>
      </label>
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
          {[
            "FFFbFB",
            "#fafcfb",
            "#F28B82",
            "#FBBC05",
            "#FFF475",
            "#CCFF90",
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
