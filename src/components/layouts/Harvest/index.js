import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { LinearProgress } from "@material-ui/core/";
import { Grid } from "@material-ui/core/";
import { Typography } from "@material-ui/core/";
import { Card } from "@material-ui/core/";
import { CardContent } from "@material-ui/core/";
import { CardMedia } from "@material-ui/core/";
import { CardActionArea } from "@material-ui/core/";
import { Paper } from "@material-ui/core/";
import { Breadcrumbs } from "@material-ui/core/";
import { Button } from "@material-ui/core/";
import { Fab } from "@material-ui/core/";
import Add from "@material-ui/icons/Add";
import axios from "axios";
import FilterFormData from "../Forms/FilterDataForm";
import styles from "../styles";

class Harvest extends Component {
  state = { loading: true, filter: "" };
  async componentDidMount() {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const { id } = this.props.match.params;
    const { data: harvest } = await axios.get(`${api_endpoint}/harvests/${id}`);
    this.setState({ harvest, loading: false });
  }

  Navigation() {
    return (
      <Paper elevation={0} className={styles.navigator}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Button color="primary" onClick={() => this.props.history.push("/")}>
            Home
          </Button>
          <Button
            color="primary"
            onClick={() =>
              this.props.history.push(`/mill/${this.state.harvest.millId}`)
            }
          >
            {this.state.harvest.mill.name}
          </Button>
          <Button color="primary">{this.state.harvest.id}</Button>
        </Breadcrumbs>
      </Paper>
    );
  }

  handleChange = filter => {
    this.setState({ filter });
  };

  getFarmCard(farm) {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.container}
        component={Link}
        key={farm.id}
        to={`/farm/${farm.id}`}
        item
        xs={6}
        sm={4}
        md={3}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={farm.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {farm.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Code: {farm.id}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  render() {
    if (this.state.loading) return <LinearProgress color="secondary" />;

    const { classes } = this.props;

    const farms = this.state.harvest.farms
      .filter(
        farm =>
          !this.state.filter ||
          farm.name.includes(this.state.filter) ||
          String(farm.id) === this.state.filter
      )
      .map(mill => this.getFarmCard(mill));

    let content;
    if (!this.state.harvest.farms.length) {
      content = (
        <Typography align="center">
          There's no farm :( start by creating one
        </Typography>
      );
    } else if (!farms.length) {
      content = <Typography align="center">No Farm found</Typography>;
    } else {
      content = farms;
    }

    return (
      <Fragment>
        {this.Navigation()}
        <FilterFormData
          placeholder={"Filter for Harvests"}
          onChange={this.handleChange}
        />
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            spacing={3}
          >
            {content}
          </Grid>
        </div>
        <Fab
          onClick={() =>
            this.props.history.push(`/farm/create/${this.state.harvest.id}`)
          }
          className={classes.fab}
          color="secondary"
          variant="extended"
        >
          <Add />
          Farm
        </Fab>
      </Fragment>
    );
  }
}

export default styles(Harvest);
