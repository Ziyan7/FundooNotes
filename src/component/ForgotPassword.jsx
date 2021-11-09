import React, { useState } from "react";
//import userService from "../service/userService";
import { Grid, TextField, Typography, Button, Paper, FormHelperText } from "@material-ui/core";
import * as Routing from "react-router-dom";
import "../style/forgotpassword.css";
import validation from "../config/validation";
import api from "../service/signUp.service";

const ForgotPassWord = () => {
    const [UserName, setUserName] = useState("");
    const [emailError, setEmailError] = useState("");

    const emailHandler = (event) => {
        if (validation.email(event.target.value)) {
          setUserName(event.target.value);
          setEmailError("");
        } else {
          setEmailError("Invalid Email");
        }
      };

      const haddleSubmit = (event) => {
        event.preventDefault();
        let data = {
        email: UserName,
        };
        api
        .forgetPassword(data)
        .then((result) => {
        console.log("Email sent successfully");
        alert("Email has been sent");
        })
        .catch((error) => {
        alert(error);
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
              Find your Fundoo Note password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={inputStyle} >
              Enter your Fundoo Note email
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={inputStyle}
              autoFocus
              label="Email"
              placeholder="name@gmail.com"
              variant="outlined"
              type="email"
              onChange={(event) => emailHandler(event)}
            />
            <FormHelperText style={helperStyle}>{emailError}</FormHelperText>
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn" component={Routing.Link} to="/login">
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

export default ForgotPassWord;
