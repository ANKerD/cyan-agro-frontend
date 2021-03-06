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
import { Fab } from "@material-ui/core/";
import Add from "@material-ui/icons/Add";
import axios from "axios";
import * as moment from "moment";
import styles from "../styles";

class Mill extends Component {
  state = { loading: true };
  async componentDidMount() {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const { id } = this.props.match.params;
    const { data: mill } = await axios.get(`${api_endpoint}/mills/${id}`);
    this.setState({ mill, loading: false });
  }

  Navigation() {
    return (
      <Paper elevation={0} className={this.props.paperClass}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Button color="primary" onClick={() => this.props.history.push("/")}>
            Home
          </Button>
          <Button color="primary">{this.state.mill.name}</Button>
        </Breadcrumbs>
      </Paper>
    );
  }

  render() {
    if (this.state.loading) return <LinearProgress color="secondary" />;

    const { classes } = this.props;

    let content;
    if (!this.state.mill.harvests.length) {
      content = (
        <Typography align="center">
          There's no harvests for this mill yet :(
        </Typography>
      );
    } else {
      content = (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell align="right">Start Date (YYYY/MM/DD)</TableCell>
              <TableCell align="right">End Date (YYYY/MM/DD)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.mill.harvests.map(harvest => (
              <TableRow
                hover
                onClick={() =>
                  this.props.history.push(`/harvest/${harvest.id}`)
                }
                key={harvest.id}
              >
                <TableCell scope="row">{harvest.id}</TableCell>
                <TableCell align="right">
                  {moment(harvest.startDate).format("YYYY/MM/DD")}
                </TableCell>
                <TableCell align="right">
                  {moment(harvest.endDate).format("YYYY/MM/DD")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }

    return (
      <Fragment>
        {this.Navigation()}
        <Grid className={classes.root} container spacing={5}>
          <Grid component={Paper} item xs={12}>
            <Typography variant="h5" align="center">
              This is the <b>{this.state.mill.name}</b> mill.
            </Typography>
          </Grid>
        </Grid>
        <Paper className={classes.root}>{content}</Paper>
        <Fab
          onClick={() =>
            this.props.history.push(`/harvest/create/${this.state.mill.id}`)
          }
          className={classes.fab}
          color="secondary"
          variant="extended"
        >
          <Add />
          Harvest
        </Fab>
      </Fragment>
    );
  }
}

export default styles(Mill);
