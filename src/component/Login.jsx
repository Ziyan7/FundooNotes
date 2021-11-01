import "../style/signIn.css"
import RainbowText from "react-rainbow-text";
import * as Routing from "react-router-dom";
import React, { useState } from "react";
import validation from "../config/validation";
import api from "../service/signUp.service";
import {
  Grid,
  Paper,
  Link,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
const Login = () => {
  const [UserName, setUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailHandler = (event) => {
    if (validation.email(event.target.value)) {
      setUserName(event.target.value);
      setEmailError("");
    } else {
      setEmailError("Invalid Email");
    }
  };

  const passwordHandler = (event) => {
    if (validation.password(event.target.value)) {
      setPassword(event.target.value);
      setPasswordError("");
    } else {
      setPasswordError("Invalid Password");
    }
  };

  const haddleSubmit = () => {
    let data = {
      email: UserName,
      password: password,
    };
    api
      .login(data)
      .then((data) => console.log(data))
      .catch((error) => console.log("Error"));
  };

  return (
    <Grid>
      <Paper className="loginStyle">
        <h2 style={{ marginTop: "60px", textAlign: "center" }}>
          <RainbowText>FundooNotes</RainbowText>
        </h2>
        <h2 style={{ marginTop: "10px", textAlign: "center" }}>Sign in</h2>
        <h3 style={{ marginTop: "10px", textAlign: "center" }}>
          Use your FundooNotes Account
        </h3>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Grid>
              <TextField
                label="Email Id"
                variant="outlined"
                size="small"
                style={{
                  width: "110%",
                  marginLeft: "55px",
                  marginTop: "10px",
                }}
                onChange={(event) => emailHandler(event)}
                required
              />
              <FormHelperText style={{ marginLeft: "60px ", color: "red" }}>
                {emailError}
              </FormHelperText>
            </Grid>
            <Grid>
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                type="password"
                style={{
                  width: "110%",
                  marginLeft: "55px",
                  marginTop: "10px",
                }}
                onChange={(event) => passwordHandler(event)}
                required
              />
              <FormHelperText style={{ marginLeft: "60px ", color: "red" }}>
                {passwordError}
              </FormHelperText>
            </Grid>
            <Link style={{ marginLeft: "55px" }}>Forgot Password?</Link>
          </Grid>
          <Grid style={{ marginTop: "40px" }}>
            <Link
              component={Routing.Link}
              to="/"
              fontSize="10px"
              style={{ marginLeft: "55px ", marginRight: "85px " }}
            >
              Create an Account
            </Link>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={haddleSubmit}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Login;
