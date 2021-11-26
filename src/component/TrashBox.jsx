import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { setTrash, deleteNote } from "../service/notes.service";
import { removeTrashNote, deleteFromTrash  } from "../redux/action";
import { IconButton, Tooltip } from "@mui/material";

const TrashBox = () => {
  const [popup, setPopup] = useState(false);
  const [del, setDelete] = useState({});
  const dispatch = useDispatch();
  const [icons, setIcons] = useState(false);
  const notes = useSelector((state) => state.allNotes.trash);

  const handleselectedTrash = (note) => {
    let data = {
      ...note,
      isTrash: false,
    };
    setTrash(data, note._id)
      .then((res) => {
        dispatch(removeTrashNote(res));
      })
      .catch((res) => console.log(res));
  };

  const handleDelete = (note) => {
    deleteNote(note.note._id)
      .then((res) => {
        dispatch(deleteFromTrash(res.note));
        setPopup((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteAll = () => {
    notes.map((note) => {
      deleteNote(note._id)
      .then((res) => {
        dispatch(deleteFromTrash(res.note));
      })
      .catch((err) => console.log(err));
  })
}

  const handlePopup = (note, index) => {
    const data = {
      note: note,
      index: index,
    };
    setDelete(data);
    setPopup((prev) => !prev);
  };

  const handleClose = () => {
    setPopup((prev) => !prev);
  };

  return (
    <>
      <Grid container spacing={0} justifyContent = "center" sx = {{ pb: "15px "}}>
        <Grid item xs={5} sx = {{ p: "7px 0 0 160px"}} >
          <Typography    style = {{fontStyle : "italic"}} >
            Notes in Trash are deleted after 7 days.
          </Typography>
        </Grid>
        <Grid item xs={2} >
          <Button onClick = {() => {handleDeleteAll()}}>Empty Trash</Button>
        </Grid>
      </Grid>


      <Grid container spacing={3}>
        {notes.map((note, index) => {
          return (
            <Grid item md={2.5}>
              <Card
                style={{ height: "130px" }}
                onMouseOver={() => {
                  setIcons(true);
                }}
                onMouseLeave={() => {
                  setIcons(false);
                }}
                style = {{minHeight : "150px"}}
              >
                <CardContent>
                  <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                    {note.title}
                  </Typography>
                  <Typography sx={{ pb: "10px" }}>{note.content}</Typography>
                </CardContent>

                {icons ? (
                  <>
                    <Tooltip title="Delete Forever">
                      <IconButton size="small">
                        <DeleteForeverIcon
                          onClick={() => handlePopup(note, index)}
                        />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Restore">
                      <IconButton size="small">
                        <RestoreFromTrashIcon
                          onClick={() => handleselectedTrash(note)}
                        />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : null}
              </Card>
            </Grid>
          );
        })}
        {popup ? (
          <Reconfirm
            del={del}
            popup={popup}
            showNote={handleClose}
            handleDelete={handleDelete}
          />
        ) : null}

      </Grid>
    </>
  );
};

function Reconfirm({ del, popup, showNote, handleDelete }) {
  return (
    <Dialog onClose={showNote} open={popup}>
      <DialogTitle>{"Do You want to delete permanently?"}</DialogTitle>

      <DialogActions>
        <Button
          onClick={showNote}
          style={{ color: "black", textTransform: "none" }}
        >
          close
        </Button>

        <Button
          onClick={() => handleDelete(del)}
          style={{ color: "black", textTransform: "none" }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TrashBox;
