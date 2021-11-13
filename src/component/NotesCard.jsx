import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const NotesCard = ({ note }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography  >
            {note.title}
          </Typography>
          <Typography >
            {note.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default NotesCard