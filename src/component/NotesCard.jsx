import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Noteicons from "./Noteicons";
import Popup from "./PopUp";

const NotesCard = ({ note }) => {
  const [icons, setIcons] = useState(false);
  
  return (
    <>
    <Card 
      onMouseOver={() => {
        setIcons(true);
      }}
      onMouseLeave={() => {
        setIcons(false);
      }}
    >
      <CardContent>
        <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
          {note.title}
        </Typography>
        <Typography>{note.content}</Typography>
      </CardContent>
      {icons ? <Noteicons /> : null}
    </Card>
    </>
  );
};
export default NotesCard;
