import NotesCard from "./NotesCard.jsx";
import { userNotes } from "../service/signUp.service";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    userNotes()
    .then((response) => {
        console.log(response.data)
    setNotes(response.data)
    })
    .catch((error) => {
    console.log(error);
    alert("No Available Notes");
    })
  }, []);

  return (
    <Grid container spacing={3}>
      {notes.map((note) => {
        return (
          <Grid item >
            <NotesCard note={note} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Notes;