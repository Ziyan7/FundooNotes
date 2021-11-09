import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  FormHelperText,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import "../style/forgotpassword.css";
import validation from "../config/validation";
import api from "../service/signUp.service";

const ResetPassWord = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { token } = useParams()
  

  const passwordHandler = (event) => {
    if (validation.password(event.target.value)) {
      setPassword(event.target.value);
      setPasswordError("");
    } else {
      setPasswordError("Invalid Password");
    }
  };

  const haddleSubmit = (event) => {
    event.preventDefault();
    let data = {
      newPassword: password,
    };
    console.log(data)
    console.log(token)
    api
    .resetPassword(data, token)
    .then((result) => {
        console.log(result.data);
        alert("Password Changed");
    })
    .catch((error) => {
      console.log(error);
    });

  };

  let inputStyle = {
    marginLeft: "3%",
  };

  let helperStyle = {
    marginLeft: "3% ",
    color: "red",
  };

  return (
    <form id="forgotpassword-form" onSubmit={haddleSubmit}>
      <Paper elevation={3} >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography style={inputStyle} variant="h5">
              Reset your Fundoo Note password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={inputStyle} >
              Enter your New Fundoo Note password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={inputStyle}
              autoFocus
              label="Password"
              variant="outlined"
              type="password"
              onChange={(event) => passwordHandler(event)}
            />
            <FormHelperText style={helperStyle}>{passwordError}</FormHelperText>
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn" component={Link} to="/login">
              Back
            </Button>
          </Grid>
          <Grid item xs={6} align="right">
            <Button style = {{marginRight :"5%"}} variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default ResetPassWord;
