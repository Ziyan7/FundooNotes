import React, { useState } from "react";
import { Card, CardContent, Typography, Grid , CardMedia } from "@mui/material";
import Noteicons from "./Noteicons";
import { useDispatch } from "react-redux";
import { setUndoNote, setUpdate } from "../redux/action/index";
import { setColor, updateNote, setImage } from "../service/notes.service";

const NotesCard = ({ note, handlePopup, index, handleTrash }) => {
  let Borders;
  const [icons, setIcons] = useState(false);
  const [cardBorder,setCardBorder] = useState (false)
  const dispatch = useDispatch();
  cardBorder ? Borders = "5" : Borders = "2"

  return (
   
    <Card
      onMouseOver={() => {
        setIcons(true);
        setCardBorder(true)
      }}
      onMouseLeave={() => {
        setIcons(false);
        setCardBorder(false)
      }}
      style={{ minHeight: "140px" ,  backgroundColor: note.color }}
      elevation = {Borders}
    >
      <CardContent sx={{ pb: "40px" }} onClick={() => handlePopup(note, index)}>
        {console.log(note)}
      {note.image !== "" ? (
                    <CardMedia
                      component="img"
                      image={`http://localhost:9000/images/${note.image}`}
                      alt="dish"
                      style={{ minHeight: "150px", maxHeight:"250px"}}
                    />
                  ) : null}
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "22px",
            fontFamily: "Google Sans",
          }}
        >
          {note.title}
        </Typography>
        <Typography >{note.content}</Typography>
      </CardContent>
      {icons ? <Noteicons handleTrash={handleTrash} note={note}  index ={index} /> : <div style={{ height: "25px" }}></div>}
    </Card>
  );
};
export default NotesCard;
