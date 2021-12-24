import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {
  InputBase,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardMedia
} from "@mui/material";
import {updateNote} from "../service/notes.service";
import { useDispatch } from "react-redux";
import {setUpdate} from "../redux/action"


 function PopUp({ popup, handleClose, editNote }) {
  const dispatch = useDispatch()

  let noteDetails = {
    title: editNote.note.title,
    content: editNote.note.content,
  };
  const [details, setDetails] = useState(noteDetails);

  const handleNoteState = (event) => {
    let { name, value } = event.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    let data = {
      title: details.title,
      content: details.content,
    };
    
    if (data.title !== "" && data.content !== "") {
      handleClose();
      updateNote(data, editNote.note._id)
        .then((res) => { 
          console.log(res );
          dispatch(setUpdate({data: res, index:editNote.index}));
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <Dialog onClose={handleClose} open={popup}>
       <CardMedia
            component="img"
            image={`https://fundoonote-backend.herokuapp.com/images/${editNote.note.image}`}
            alt="image"
            style={{height : "250px" }}
          />
      <DialogTitle>
        <InputBase
          variant="standard"
          placeholder="Title"
          inputProps={{
            style: {
              color: "black",
              height: "36px",
              width: "500px",
              fontWeight: "bold",
              fontSize: "25px",
            },
            disableUnderline: true,
          }}
          elevation={3}
          fullWidth
          name="title"
          value={details.title}
          onChange={handleNoteState}
        />
      </DialogTitle>

      <DialogContent>
        <InputBase
          variant="standard"
          placeholder="Take a note..."
          inputProps={{
            style: { color: "black", minHeight: "36px" },
            disableUnderline: true,
          }}
          multiline={true}
          elevation={3}
          fullWidth
          name="content"
          value={details.content}
          onChange={handleNoteState}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleUpdate}
          style={{ color: "black", textTransform: "none" }}
        >
          submit
        </Button>
        <Button
          onClick={handleClose}
          style={{ color: "black", textTransform: "none" }}
        >
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default PopUp