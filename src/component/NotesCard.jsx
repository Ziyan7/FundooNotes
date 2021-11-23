import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Noteicons from "./Noteicons";

const NotesCard = ({ note ,handlePopup, index}) => {
  const [icons, setIcons] = useState(false);
  
  return (
   
    <Card 
      onMouseOver={() => {
        setIcons(true);
      }}
      onMouseLeave={() => {
        setIcons(false);
      }}
       style = {{height : "130px"}}
    >
      <CardContent onClick={() => handlePopup(note,index)}>
        <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
          {note.title}
        </Typography>
        <Typography sx = {{pb : "20px"}}>{note.content}</Typography>
      </CardContent>
      {icons ? <Noteicons /> : null}
      
    </Card>
    
  );
};
export default NotesCard;
