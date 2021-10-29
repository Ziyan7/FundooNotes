import "../Style/SignUp.css";
import logo from "../Assets/Images/images.jfif";
import RainbowText from "react-rainbow-text";
import React, { Component } from "react";
import * as Routing from "react-router-dom";
import validation from "../Validation/SignUpValidation";

import {
  Grid,
  Paper,
  TextField,
  Link,
  Button,
  InputAdornment,
  FormHelperText,
} from "@material-ui/core";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmError: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  firsthandler = (event) => {
    if (validation.firstName(event)) {
      this.setState({
        firstName: event.target.value,
        nameError: " ",
      });
    } else {
      this.setState({
        nameError: "First letter of the name must be in uppercase ",
      });
    }
  };
  lasthandler = (event) => {
    if (validation.LastName(event)) {
      this.setState({
        firstName: event.target.value,
        nameError: " ",
      });
    } else {
      this.setState({
        nameError: "First letter of the name must be in uppercase ",
      });
    }
  };

  emailhandler = (event) => {
    if (validation.email(event)) {
      this.setState({
        email: event.target.value,
        emailError: " ",
      });
    } else {
      this.setState({
        emailError: "Enter a valid email ID",
      });
    }
  };

  passwordhandler = (event) => {
    if (validation.password(event)) {
      this.setState({
        password: event.target.value,
        passwordError: " ",
      });
    } else {
      this.setState({
        passwordError: "Invalid Password ",
      });
    }
  };

  confirmhandler = (event) => {
    if (this.state.password == event.target.value) {
      this.setState({
        confirm: event.target.value,
        confirmError: "",
      });
    } else {
      this.setState({
        confirmError: "Password Missmatch ",
      });
    }
  };

  handleSubmit = () => {
    alert("Created Account Successfully");
    this.setState({
      firstName: " ",
      lastName: " ",
      email: " ",
      password: " ",
      confirm: " ",
    });
  };
  render() {
    return (
      <Grid>
        <Paper className="paperStyle">
          <h1 style={{ marginLeft: "10px" }}>
            <RainbowText>FundooNotes</RainbowText>
          </h1>
          <h3 style={{ marginLeft: "10px" }}>
            Create your FundooNotes Account
          </h3>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <item>
                <Grid>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{
                      width: "40%",
                      margin: "10px",
                      marginBottom: "0px",
                    }}
                    onChange={this.firsthandler}
                    required
                  />
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{
                      width: "40%",
                      margin: "10px",
                      marginBottom: "0px",
                    }}
                    onChange={this.lasthandler}
                    required
                  />
                  <FormHelperText style={{ marginLeft: "12px ", color: "red" }}>
                    {this.state.nameError}
                  </FormHelperText>
                </Grid>
                <Grid>
                  <TextField
                    label="UserName"
                    variant="outlined"
                    size="small"
                    style={{
                      width: "85%",
                      margin: "10px",
                      marginBottom: "0px",
                    }}
                    helperText="You can use letters,numbers or periods"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          @gmail.com
                        </InputAdornment>
                      ),
                    }}
                    onChange={this.emailhandler}
                    required
                  />
                  <FormHelperText
                    style={{
                      margintop: "0px",
                      marginLeft: "12px ",
                      color: "red",
                    }}
                  >
                    {this.state.emailError}
                  </FormHelperText>
                </Grid>
                <Grid>
                  <TextField
                    label="Password"
                    variant="outlined"
                    size="small"
                    type="password"
                    style={{ width: "40%", margin: "10px" }}
                    onChange={this.passwordhandler}
                    required
                  />
                  <TextField
                    label="Conform"
                    variant="outlined"
                    size="small"
                    type="password"
                    style={{ width: "40%", margin: "10px" }}
                    onChange={this.confirmhandler}
                    required 
                  />
                  <FormHelperText
                    style={{
                      margintop: "0px",
                      marginLeft: "12px ",
                      color: "red",
                    }}
                  >
                    {this.state.passwordError} 
                    {this.state.confirmError}
                  </FormHelperText>
                  <FormHelperText
                    style={{ marginLeft: "12px ", margintop: "0px" }}
                  >
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols
                  </FormHelperText>
                </Grid>
                <Grid style={{ marginTop: "40px" }}>
                  <Link
                    component={Routing.Link}
                    to="/login"
                    style={{ marginRight: "187px ", marginLeft: "10px " }}
                  >
                    Sign in instead
                  </Link>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Create
                  </Button>
                </Grid>
              </item>
            </Grid>
            <Grid item xs={2}>
              <item>
                <img src={logo} style={{ width: "200%" }} alt="Loading" />
              </item>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}
export default SignUp;
