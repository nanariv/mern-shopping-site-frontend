import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Signup from "./signup";
import { useRef } from "react";
import bcrypt from "bcryptjs";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Task Hero
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [passwrd, setPasswrd] = useState("");
  const [error, setError] = useState("");
  const apiUrl = "https://climbers-project-todo-backend.glitch.me/";

  //   function handleLoginForm(e) {
  //     e.preventDefault();
  //     const email = emailInputRef.current ? emailInputRef.current.value : ""
  //     const password = passwordInputRef.current ? passwordInputRef.current.value : ""
  //     const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')

  //      fetch('https://finalprojectediting.glitch.me/login', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: hashedPassword,
  //       }),
  //     })
  //     .then(response => {
  //         if (response.status == 200) {
  //             window.location.href = '/';
  //         }
  //     })
  //     .catch(function(err) {
  //         console.log(err);
  //     });
  //   }

  function updateComp(e) {
    console.log(e);
    e.preventDefault();
    setUser(e.target.value);
  }
  const handleLogin = (e) => {
    axios.get(apiUrl + `/emailId?emailId=${email}`).then((response) => {
      // console.log(response.data);
      const { username, id, password } = response.data;
      if (passwrd === password) {
        localStorage.setItem("userid", id);
        localStorage.setItem("userName", username);
        if ((username == "admin")) {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      } else {
        e.preventDefault();
        setError("Please check the credentials !");
        setPasswrd("");
        setEmail("");
      }
    });
    //------------------------------------------------------------
    //Add admin ID in line no 111 and in 1113 change / to /admin
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={passwrd}
            autoComplete="current-password"
            onChange={(e) => {
              setPasswrd(e.target.value);
              setError("");
            }}
          />
          <span style={{ color: "red" }}>{error}</span>
          <br />
          <br />
          <Button
            variant="contained"
            onClick={handleLogin}
            style={{ background: "blue", color: "white" }}
          >
            login{" "}
          </Button>{" "}
          &nbsp;&nbsp;
          <Button
            variant="contained"
            href="/signup"
            style={{ background: "green", color: "white" }}
          >
            Sign up
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
