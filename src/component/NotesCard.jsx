import React, { useState } from "react";
import { Card, CardContent, Typography, CardMedia  } from "@mui/material";
import Noteicons from "./Noteicons";
import "../styles/card.css"

const NotesCard = ({ note, handlePopup, index, handleTrash }) => {
  let Borders;
  const [icons, setIcons] = useState(false);
  const [cardBorder, setCardBorder] = useState(false);
  cardBorder ? (Borders = "5") : (Borders = "2");

  return (
    <Card
      onMouseOver={() => {
        setIcons(true);
        setCardBorder(true);
      }}
      onMouseLeave={() => {
        setIcons(false);
        setCardBorder(false);
      }}
      style={{ minHeight: "140px", backgroundColor: note.color ,  }}
      elevation={Borders}
    >
      <CardContent sx={{ pb: "40px" }} onClick={() => handlePopup(note, index)}>
        {note.image !== "" ? (
          <CardMedia
            component="img"
            image={`http://localhost:9000/images/${note.image}`}
            alt="image"
            style={{height : "170px" }}
          />
        ) : null}
        <Typography noWrap
          sx={{
            fontWeight: "500",
            fontSize: "22px",
          }}
        >
          {note.title}
        </Typography>
        <Typography className = "cardContent" >{note.content}</Typography>
      </CardContent>
      {icons ? (
          <Noteicons handleTrash={handleTrash} note={note} index={index} />
      ) : (
        <div style={{ height: "30px" }}></div>
      )}
    </Card>
  );
};
export default NotesCard;
