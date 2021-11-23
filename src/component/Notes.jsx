import NotesCard from "./NotesCard.jsx";
import React , {useState} from "react";
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux'
import PopUp from "./PopUp.jsx";
const Notes = ({view}) => {
  const [popup, setPopup] = useState(false);
const [editNote, setEditedNote] = useState({})
const notes = useSelector((state) => state.allNotes.searchState);

const handlePopup = (note,index) => {
  const data = {
    note: note,
    index: index
  }
  setEditedNote(data)
  setPopup((prev) => !prev)
}

const handleClose=() => {
  setPopup((prev) => !prev)
}

console.log(view)
  return (
    <Grid container spacing={3} justifyContent={view ?null  :  "center"}>
      {notes.map((note,index) => {
        return (
          <Grid item  md = { view ? 2.5 : 8}>
            <NotesCard note={note} handlePopup={handlePopup} index={index}/>
          </Grid>
        );
      })}
       {popup?<PopUp popup={popup} handleClose={handleClose} editNote={editNote} /> : null}
    </Grid>
  );
};

export default Notes;
