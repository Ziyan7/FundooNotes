import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Noteicons from "./Noteicons";

const NotesCard = ({ note, handlePopup, index, handleTrash }) => {
  const [icons, setIcons] = useState(false);
  const [colour , setColour] = useState(note.color)

  


  return (
   
    <Card
      onMouseOver={() => {
        setIcons(true);
      }}
      onMouseLeave={() => {
        setIcons(false);
      }}
      style={{ minHeight: "135px" , backgroundColor: colour}}
    >
      <CardContent onClick={() => handlePopup(note, index)}>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "22px",
            fontFamily: "Google Sans",
          }}
        >
          {note.title}
        </Typography>
        <Typography sx={{ pb: "20px" }}>{note.content}</Typography>
      </CardContent>
      {icons ? <Noteicons handleTrash={handleTrash} note={note} setColour = {setColour} /> : null}
    </Card>
  );
};
export default NotesCard;
