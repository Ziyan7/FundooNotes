import "../styles/register.css";
import logo from "../asset/image/images.jfif";
import RainbowText from "react-rainbow-text";
import React, { Component } from "react";
import * as Routing from "react-router-dom";
import validation from "../config/validation";
import {register} from "../service/signUp.service";

import {
  Grid,
  Paper,
  TextField,
  Link,
  Button,
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
  firstHandler = (event) => {
    validation.firstName(event.target.value)
      ? this.setState({
          firstName: event.target.value,
          nameError: " ",
        })
      : this.setState({
          nameError: "First letter of the name must be in uppercase ",
        });
  };
  lastHandler = (event) => {
    validation.LastName(event.target.value)
      ? this.setState({
          lastName: event.target.value,
          nameError: " ",
        })
      : this.setState({
          nameError: "First letter of the name must be in uppercase ",
        });
  };

  emailHandler = (event) => {
    validation.email(event.target.value)
      ? this.setState({
          email: event.target.value,
          emailError: " ",
        })
      : this.setState({
          emailError: "Enter a valid email ID",
        });
  };

  passwordHandler = (event) => {
    validation.password(event.target.value)
      ? this.setState({
          password: event.target.value,
          passwordError: " ",
        })
      : this.setState({
          passwordError: "Invalid Password ",
        });
  };

  confirmHandler = (event) => {
    this.state.password === event.target.value
      ? this.setState({
          confirm: event.target.value,
          confirmError: "",
        })
      : this.setState({
          confirmError: "Password Missmatch ",
        });
  };

  handleSubmit = () => {
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    register(data)
      .then((data) => {
        alert("Created Account Successfully");
      })
      .catch((error) => {
        alert(error);
      });

    this.setState({
      firstName: " ",
      lastName: " ",
      email: " ",
      password: " ",
      confirm: " ",
    });
  };

  textStyle = {
    marginLeft: "10px", 
    fontFamily : "roboto"
  }
  nameStyle = {
    width: "40%",
    margin: "10px",
    marginBottom: "0px",
    fontFamily : "roboto"
  };

  emailStyle = {
    width: "85%",
    margin: "10px",
    marginBottom: "0px",
    fontFamily : "roboto"
  };

  helperStyle = {
    marginLeft: "12px ",
    color: "red",
    fontFamily : "roboto"
  };

  passwordStyle = {
    width: "40%",
    margin: "10px",
    fontFamily : "roboto"
  };

  render() {
    return (
      <Grid>
        <Paper className="paperStyle">
          <h1 style={this.textStyle}>
            <RainbowText >FundooNotes</RainbowText>
          </h1>
          <h3 style={this.textStyle}>
            Create your FundooNotes Account
          </h3>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <Grid>
                <TextField
                  autoFocus
                  type="input"
                  label="First Name"
                  variant="outlined"
                  size="small"
                  id = "firstName"
                  style={this.nameStyle}
                  onChange={this.firstHandler}
                  required
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  size="small"
                  id = "lastName"
                  style={this.nameStyle}
                  onChange={this.lastHandler}
                  required
                />
                <FormHelperText style={this.helperStyle}>
                  {this.state.nameError}
                </FormHelperText>
              </Grid>
              <Grid>
                <TextField
                  placeholder="name@gmail.com"
                  label="Email"
                  variant="outlined"
                  size="small"
                  id = "email"
                  style={this.emailStyle}
                  helperText="You can use letters,numbers or periods"
                  onChange={this.emailHandler}
                  required
                />
                <FormHelperText style={this.helperStyle}>
                 {this.state.emailError}
                </FormHelperText>
              </Grid>
              <Grid>
                <TextField
                  label="Password"
                  variant="outlined"
                  size="small"
                  type="password"
                  id = "password"
                  style={this.passwordStyle}
                  onChange={this.passwordHandler}
                  required
                />
                <TextField
                  label="Conform"
                  variant="outlined"
                  size="small"
                  type="password"
                  id = "confirm"
                  style={this.passwordStyle}
                  onChange={this.confirmHandler}
                  required
                />
                <FormHelperText style={{ paddingLeft: "12px " }}>
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </FormHelperText>
                <FormHelperText style={this.helperStyle}>
                  {this.state.passwordError}
                  {this.state.confirmError}
                </FormHelperText>
              </Grid>
              <Grid style={{ paddingTop: "10%" }}>
                <Link
                  component={Routing.Link}
                  to="/login"
                  style={{ paddingRight: "40% ", marginLeft: "10px " }}
                  id = "login-redirect"
                >
                  Sign in instead
                </Link>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit} 
                  id = "signUp-btn"
                >
                  Create
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <img src={logo} style={{ width: "200%" }} alt="Loading" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}
export default SignUp;
