import NotesCard from "./NotesCard.jsx";
import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux'

const Notes = () => {
const notes = useSelector((state) => state.allNotes.searchState);
  return (
    <Grid container spacing={3}>
      {notes.map((note) => {
        return (
          <Grid item>
            <NotesCard note={note} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Notes;
