import React from "react";
import { Snackbar } from "@material-ui/core";
import { Button } from "@material-ui/core/";
import { Fade } from "@material-ui/core/";

const ErrorDisplayer = props => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      action={
        <Button onClick={() => props.setError("")} color="inherit">
          close
        </Button>
      }
      open={!!props.error}
      TransitionComponent={Fade}
      message={<span>{props.error}</span>}
    />
  );
};

export default ErrorDisplayer;
