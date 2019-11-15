import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fab } from "@material-ui/core/";
import { LinearProgress } from "@material-ui/core/";
import { Grid } from "@material-ui/core/";
import { Typography } from "@material-ui/core/";
import { Card } from "@material-ui/core/";
import { CardContent } from "@material-ui/core/";
import { CardMedia } from "@material-ui/core/";
import { CardActionArea } from "@material-ui/core/";
import Add from "@material-ui/icons/Add";
import axios from "axios";
import styles from "../styles";

class Home extends Component {
  state = { loading: true };

  getMillCard(mill) {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.container}
        component={Link}
        key={mill.id}
        to={`/mill/${mill.id}`}
        item
        xs={6}
        sm={4}
        md={3}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={mill.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {mill.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  async componentDidMount() {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const { data: mills } = await axios.get(`${api_endpoint}/mills`);
    this.setState({ mills, loading: false });
  }

  render() {
    if (this.state.loading) return <LinearProgress color="secondary" />;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={3}
        >
          {this.state.mills.map(mill => this.getMillCard(mill))}
        </Grid>
        <Fab
          onClick={() => this.props.history.push("/mill/create")}
          className={classes.fab}
          color="secondary"
          variant="extended"
        >
          <Add />
          Mill
        </Fab>
      </div>
    );
  }
}

export default styles(Home);
