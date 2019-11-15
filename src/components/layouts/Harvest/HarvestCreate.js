import React, { useState } from "react";
import { TextField } from "@material-ui/core/";
import { Grid } from "@material-ui/core/";
import LocalFlorist from "@material-ui/icons/LocalFlorist";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import axios from "axios";
import CreateForm from "../CreateForm";

const DatePicker = (date, setDate, label) => {
  return (
    <KeyboardDatePicker
      margin="normal"
      label={label}
      format="yyyy/dd/MM"
      fullWidth
      value={date}
      onChange={ev => setDate(ev)}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
    />
  );
};

export default function MillCreate(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [millId, setMillId] = useState("");
  const { params } = props.match;
  const onSubmit = async () => {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const harvest = await axios.post(`${api_endpoint}/harvests`, {
      millId: params.millId || millId,
      startDate,
      endDate
    });
    const {
      data: { id }
    } = harvest;

    props.history.push(`/harvest/${id}`);
  };

  const MillInput = (
    <TextField
      variant="outlined"
      margin="normal"
      type="number"
      required
      fullWidth
      label="Mill id"
      disabled={!!params.millId}
      value={params.millId || millId}
      onChange={({ target: { value } }) =>
        !params.millId && !isNaN(value) && setMillId(value)
      }
    />
  );

  return (
    <CreateForm
      onSubmit={onSubmit}
      actionText="Create Harvest!"
      title="Register Harvest"
      icon={<LocalFlorist />}
    >
      {MillInput}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          {DatePicker(startDate, setStartDate, "Start Date")}
          {DatePicker(endDate, setEndDate, "End Date")}
        </Grid>
      </MuiPickersUtilsProvider>
    </CreateForm>
  );
}
