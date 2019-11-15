import React, { useState } from "react";
import { Avatar } from "@material-ui/core/";
import { Button } from "@material-ui/core/";
import { Container } from "@material-ui/core/";
import { CssBaseline } from "@material-ui/core/";
import { TextField } from "@material-ui/core/";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/";
import DomainIcon from "@material-ui/icons/Domain";
import axios from "axios";
import ErrorDisplayer from "../ErrorDisplayer";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function CreateForm(props) {
  const [error, setError] = useState("");
  const onSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();

    try {
      await props.onSubmit(event);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <DomainIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Mill
        </Typography>
        <form onSubmit={onSubmit} className={classes.form}>
          {props.children}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {props.actionText}
          </Button>
        </form>
      </div>
      <ErrorDisplayer error={error} setError={setError} />
    </Container>
  );
}
