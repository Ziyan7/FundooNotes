import React, { useState } from "react";
import { setNotes } from "../service/notes.service";
import { Paper, Grid, InputBase, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCreateNote } from "../redux/action";

const CreateNotes = () => {
  const dispatch = useDispatch();

  let noteDetails = {
    title: "",
    content: "",
  };

  const [visible, setVisibility] = useState(false);
  const [details, setDetails] = useState(noteDetails);

  const handleNoteState = (event) => {
    let { name, value } = event.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddNotes = () => {
    let data = {
      title: details.title,
      content: details.content,
      isTrash : false , 
      color : "white",
      image : ""
    };
    setDetails(noteDetails);
    setNotes(data)
      .then((response) => {
        console.log("checkinggggg note");
        console.log(response);
        dispatch(setCreateNote(response.note));
      })
      .catch((error) => console.log(error));
  };

  return (
    <Grid sx={{ paddingLeft: "25%" }}>
      <Paper
        elevation={5}
        sx={{ padding: "0px 2% 0px 2%", width: "60%", margin: "2%" }}
      >
        {visible === false ? (
          <InputBase
            variant="standard"
            placeholder="Take a note..."
            inputProps={{
              style: { height: "36px" },
            }}
            fullWidth
            onClick={() => setVisibility(true)}
          />
        ) : (
          <Grid container>
            <Grid item xs={12}>
              <InputBase
                variant="standard"
                placeholder="Title"
                inputProps={{
                  style: { color: "black", height: "36px" },
                  disableUnderline: true,
                }}
                elevation={3}
                fullWidth
                name="title"
                value={details.title}
                onChange={handleNoteState}
              />
            </Grid>
            <Grid item xs={12}>
              <InputBase
                variant="standard"
                placeholder="Take a note..."
                inputProps={{
                  style: { color: "black", height: "36px" },
                  disableUnderline: true,
                }}
                multiline={true}
                elevation={3}
                fullWidth
                name="content"
                value={details.content}
                onChange={handleNoteState}
              />
            </Grid>

                <Grid item xs={12} align="right">
              <Button  
                onClick={() => {
                  setVisibility(false);
                  handleAddNotes()
                 
                }}
                style={{ color: "black" }}
              >
                close
              </Button>
              </Grid>
            </Grid>
        )}
      </Paper>
    </Grid>
  );
};
export default CreateNotes;
