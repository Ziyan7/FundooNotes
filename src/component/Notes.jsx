import NotesCard from "./NotesCard.jsx";
import React , {useState} from "react";
import { Grid , Snackbar , Button , IconButton } from "@mui/material";
import { useSelector } from 'react-redux'
import PopUp from "./PopUp.jsx";
import { useDispatch } from "react-redux";
import { addTrashNote } from "../redux/action";
import {setTrash} from "../service/notes.service"
import CloseIcon from '@mui/icons-material/Close';
import {  setUndoNote ,removeTrashNote} from "../redux/action";

const Notes = ({view}) => {
const [popup, setPopup] = useState(false);
const [editNote, setEditedNote] = useState({})
const notes = useSelector((state) => state.allNotes.searchState);
const undonote = useSelector((state) => state.allNotes.UndoState);
const dispatch = useDispatch();

const [undoItem, setUndoItem] = useState(null)

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

const handleTrash=(note) => {
  let data = {
    ...note,
    isTrash: true
  };
  setTrash(data, note._id)
        .then((res) => {
          dispatch(addTrashNote(res));
          console.log(res)
          setUndoItem(res)
        })
        .catch((res) => console.log(res))
};

const handleUndoCard = () => {
  let data = {
    ...undoItem,
    isTrash: false,
  };
 
  setTrash(data, undoItem._id)
    .then((res) => {
      dispatch(removeTrashNote(res));
      handleUndoClose();
     console.log(res)
    })
    .catch((res) => console.log(res));
};

 const handleUndoClose = ( reason) => {
   if (reason === 'clickaway') {
     return;
   }
   dispatch(setUndoNote(false));
 };


const action = (
  <>
    <Button color="secondary" size="small" onClick = {handleUndoCard } >
      UNDO
    </Button>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleUndoClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </>
);
  
  return (
    <Grid container spacing={3} justifyContent={view ? null  :  "center"}>
     
      {notes.map((note,index) => {
        return (
          <Grid item  md = { view ? 2.5 : 8}>
            <NotesCard note={note} handlePopup={handlePopup} index={index} handleTrash ={handleTrash}/>
          </Grid>
        );
      })}
       {popup?<PopUp popup={popup} handleClose={handleClose} editNote={editNote} /> : null}
       <Snackbar
        open={undonote}
        autoHideDuration={6000}
        onClose={handleUndoClose}
        message="Note Deleted"
        action={action}
      /> 
    </Grid>
  );
};

export default Notes;
