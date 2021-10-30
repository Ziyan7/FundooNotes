import "../Style/SignUp.css";
import RainbowText from "react-rainbow-text";
import * as Routing from "react-router-dom";
import React, { useState } from "react";
import validation from "../Validation/SignUpValidation";
import {
  Grid,
  Paper,
  Link,
  TextField,
  Button,
  InputAdornment,
  FormHelperText
} from "@material-ui/core";
const Login = () => {
  const [UserName, setUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let emailHandler = (event) => {
    if (validation.email(event)) {
      setUserName(event.target.value)
      setEmailError("")
    } else {
      setEmailError("Invalid Email")
    }
  };

  let passwordHandler = (event) => {
    if (validation.password(event)) {
      setPassword(event.target.value)
      setPasswordError("")
    } else {
      setPasswordError("Invalid Password")
    }
  };

  return (
    <Grid>
      <Paper className="loginStyle">
        <h2 style={{ marginTop: "60px", textAlign: "center" }}>
          <RainbowText>FundooNotes</RainbowText>
        </h2>
        <h2 style={{ marginTop: "10px", textAlign: "center" }}>Sign in</h2>
        <h3 style={{ marginTop: "10px", textAlign: "center" }}>
          {" "}
          Use your FundooNotes Account
        </h3>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <item>
              <Grid>
                <TextField
                  label="UserName"
                  variant="outlined"
                  size="small"
                  style={{
                    width: "110%",
                    marginLeft: "55px",
                    marginTop: "10px",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">@gmail.com</InputAdornment>
                    ),
                  }}
                  onChange = {(event)=>emailHandler(event)}
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
                  onChange = {(event)=>passwordHandler(event)}
                  required
                />
                <FormHelperText style={{ marginLeft: "60px ", color: "red" }}>
                 {passwordError}
                  </FormHelperText>
              </Grid>
              <Link style={{ marginLeft: "55px" }}>Forgot Password?</Link>
            </item>
          </Grid>
          <Grid style={{ marginTop: "55px" }}>
            <Link
              component={Routing.Link}
              to="/"
              fontSize="10px"
              style={{ marginLeft: "55px ", marginRight: "85px " }}
            >
              Create an Account
            </Link>

            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Login;
