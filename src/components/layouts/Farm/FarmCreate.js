import React, { useState } from "react";
import { TextField } from "@material-ui/core/";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import axios from "axios";
import CreateForm from "../Forms/CreateForm";

export default function FarmCreate(props) {
  const [harvestId, setHarvestId] = useState("");
  const [farmName, setFarmName] = useState("");
  const { params } = props.match;
  const onSubmit = async () => {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const farm = await axios.post(`${api_endpoint}/farms`, {
      name: farmName,
      harvestId: params.harvestId || harvestId
    });
    const {
      data: { id }
    } = farm;

    props.history.push(`/farm/${id}`);
  };

  const HarvestInput = (
    <TextField
      variant="outlined"
      margin="normal"
      type="number"
      required
      fullWidth
      label="Harvest id"
      disabled={!!params.harvestId}
      value={params.harvestId || harvestId}
      onChange={({ target: { value } }) =>
        !params.harvestId && !isNaN(value) && setHarvestId(value)
      }
    />
  );

  return (
    <CreateForm
      onSubmit={onSubmit}
      actionText="Create Farm!"
      title="Register Farm"
      icon={<HomeWorkIcon />}
    >
      {HarvestInput}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Farm name"
        autoFocus
        value={farmName}
        onChange={ev => setFarmName(ev.target.value)}
      />
    </CreateForm>
  );
}
