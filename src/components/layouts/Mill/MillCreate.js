import React, { useState } from "react";
import { TextField } from "@material-ui/core/";
import DomainIcon from "@material-ui/icons/Domain";
import axios from "axios";
import CreateForm from "../CreateForm";

export default function MillCreate(props) {
  const [millName, setMillName] = useState("");
  const onSubmit = async () => {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const mill = await axios.post(`${api_endpoint}/mills`, {
      name: millName
    });
    const {
      data: { id }
    } = mill;

    props.history.push(`/mill/${id}`);
  };
  return (
    <CreateForm
      onSubmit={onSubmit}
      actionText="Create Mill!"
      title="Register Mill"
      icon={DomainIcon}
    >
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Mill name"
        autoFocus
        value={millName}
        onChange={ev => setMillName(ev.target.value)}
      />
    </CreateForm>
  );
}
