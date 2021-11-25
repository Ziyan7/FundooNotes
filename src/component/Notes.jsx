import NotesCard from "./NotesCard.jsx";
import React , {useState} from "react";
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux'
import PopUp from "./PopUp.jsx";
import { useDispatch } from "react-redux";
import { addTrashNote } from "../redux/action";
import {setTrash} from "../service/notes.service"

const Notes = ({view}) => {
  const [popup, setPopup] = useState(false);
const [editNote, setEditedNote] = useState({})
const notes = useSelector((state) => state.allNotes.searchState);

const dispatch = useDispatch();


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

// const handleTrash = (note) => {
//   note.isTrash = true;
//   const data = {
//     note :note ,
//   }
//   console.log("trashhhhhhhh")
//   console.log(data.note.isTrash)
//   console.log(data)
//   console.log(data.note._id)
//   updateNote(data.note, data.note._id)
//         .then((res) => { 
//           console.log("mmm,njhghfgdffghfjhghjfhgfjhghgdhggjhgf" );
//           console.log(res );
//           dispatch(setDeletedNote(res.note))
//         })
//         .catch((err) => console.log(err.message));
//       }
const handleTrash=(note) => {
  let data = {
    ...note,
    isTrash: true
  };
  console.log(note._id)
  setTrash(data, note._id)
        .then((res) => {
          console.log("ngjfggjhghgfgh")
          console.log(res.note)
          dispatch(addTrashNote(res));
        })
        .catch((res) => console.log(res))
};
  

console.log(view)
  return (
    <Grid container spacing={3} justifyContent={view ?null  :  "center"}>
     
      {notes.map((note,index) => {
        return (
          <Grid item  md = { view ? 2.5 : 8}>
            {console.log("qwercheck")}
      {console.log(note)}
            <NotesCard note={note} handlePopup={handlePopup} index={index} handleTrash ={handleTrash}/>
          </Grid>
        );
      })}
       {popup?<PopUp popup={popup} handleClose={handleClose} editNote={editNote} /> : null}
    </Grid>
  );
};

export default Notes;
