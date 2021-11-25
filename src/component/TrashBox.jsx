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
import { removeTrashNote, deleteFromTrash } from "../redux/action";
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
    console.log("mynoteeeeechecking");
    console.log(note);
    deleteNote(note.note._id)
      .then((res) => {
        console.log("myresponse check");
        console.log(res);
        dispatch(deleteFromTrash(res.note));
        setPopup((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

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
  );
};

function Reconfirm({ del, popup, showNote, handleDelete }) {
  return (
    <Dialog onClose={showNote} open={popup}>
      <DialogTitle>{"Do You want to delete permanently?"}</DialogTitle>

      <DialogActions>
        <Button
          onClick={() => handleDelete(del)}
          style={{ color: "black", textTransform: "none" }}
        >
          Delete
        </Button>
        <Button
          onClick={showNote}
          style={{ color: "black", textTransform: "none" }}
        >
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TrashBox;
