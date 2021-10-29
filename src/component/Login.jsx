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
} from "@material-ui/core";
const Login = () => {
  const [UserName, setUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

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
                  required
                />
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
                    marginBottom: "10px",
                  }}
                  required
                />
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
