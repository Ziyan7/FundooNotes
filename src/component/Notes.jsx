import NotesCard from "./NotesCard.jsx";
import React  from "react";
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux'

const Notes = (view) => {
const notes = useSelector((state) => state.allNotes.searchState);

console.log(view)
  return (
    <Grid container spacing={3}>
      {notes.map((note) => {
        return (
          
          <Grid item  md = { view  ? 3 : 8}>
            <NotesCard note={note}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Notes;
