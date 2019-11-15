import React, { useState } from "react";
import { TextField } from "@material-ui/core/";
import BorderOuter from "@material-ui/icons/BorderOuter";
import axios from "axios";
import CreateForm from "../CreateForm";

const Coord = (value, setValue, rangeValue, label) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      type="number"
      required
      fullWidth
      min={-rangeValue}
      max={rangeValue}
      label={label}
      value={value}
      onChange={({ target: { value: val } }) => {
        console.log(val);
        // !isNaN(ev);
        setValue(val);
      }}
    />
  );
};

export default function FieldCreate(props) {
  const [farmId, setFarmId] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const { params } = props.match;
  const onSubmit = async () => {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const { data: field } = await axios.post(`${api_endpoint}/fields`, {
      farmId: params.farmId || farmId,
      latitude: lat,
      longitude: lng
    });
    console.log(field);

    props.history.push(`/farm/${field.farmId}`);
  };

  const FarmInput = (
    <TextField
      variant="outlined"
      margin="normal"
      type="number"
      required
      fullWidth
      label="Farm id"
      disabled={!!params.farmId}
      value={params.farmId || farmId}
      onChange={({ target: { value } }) =>
        !params.farmId && !isNaN(value) && setFarmId(value)
      }
    />
  );

  return (
    <CreateForm
      onSubmit={onSubmit}
      actionText="Create Field!"
      title="Register Field"
      icon={<BorderOuter />}
    >
      {FarmInput}
      {Coord(lat, setLat, 90, "Latitude")}
      {Coord(lng, setLng, 180, "Longitude")}
    </CreateForm>
  );
}
