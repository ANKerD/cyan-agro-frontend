import React from "react";
import { TextField } from "@material-ui/core/";
import { Grid } from "@material-ui/core/";
import { Paper } from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "4px 6px",
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function FilterDataForm(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper component="form" className={classes.root}>
        <InputBase
          autoFocus={true}
          onChange={({ target: { value } }) => props.onChange(value)}
          className={classes.input}
          placeholder={props.placeholder}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
}
