import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core/";
import { Button } from "@material-ui/core/";
import { Breadcrumbs } from "@material-ui/core/";
import { Paper } from "@material-ui/core/";
import { Typography } from "@material-ui/core/";
import { LinearProgress } from "@material-ui/core/";
import { Table } from "@material-ui/core/";
import { TableHead } from "@material-ui/core/";
import { TableBody } from "@material-ui/core/";
import { TableRow } from "@material-ui/core/";
import { TableCell } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles/";
import axios from "axios";
import * as styles from "../styles";

class Farm extends Component {
  state = { loading: true };
  async componentDidMount() {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const { id } = this.props.match.params;
    const { data: farm } = await axios.get(`${api_endpoint}/farms/${id}`);
    this.setState({ farm, loading: false });
  }

  Navigation() {
    return (
      <Paper elevation={0} className={this.props.paperClass}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Button color="primary" onClick={() => this.props.history.push("/")}>
            Home
          </Button>
          <Button
            color="primary"
            onClick={() =>
              this.props.history.push(
                `/mill/${this.state.farm.harvest.mill.id}`
              )
            }
          >
            {this.state.farm.harvest.mill.name}
          </Button>
          <Button
            color="primary"
            onClick={() =>
              this.props.history.push(`/harvest/${this.state.farm.harvest.id}`)
            }
          >
            {this.state.farm.harvest.id}
          </Button>
          <Button color="primary">{this.state.farm.name}</Button>
        </Breadcrumbs>
      </Paper>
    );
  }

  getFieldCard(field) {
    return (
      <TableRow hover onClick={() => window.alert("cricked")} key={field.id}>
        <TableCell scope="row">{field.id}</TableCell>
        <TableCell align="right">{field.latitude}</TableCell>
        <TableCell align="right">{field.longitude}</TableCell>
      </TableRow>
    );
  }

  render() {
    if (this.state.loading) return <LinearProgress color="secondary" />;

    const { classes } = this.props;
    const { fields } = this.state.farm;
    let content;
    if (!fields.length) {
      content = (
        <Typography align="center">
          There's no fields for this farm yet :(
        </Typography>
      );
    } else {
      content = (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Field Code</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">Longitude</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{fields.map(field => this.getFieldCard(field))}</TableBody>
        </Table>
      );
    }
    return (
      <Fragment>
        {this.Navigation()}
        {content}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Farm);
