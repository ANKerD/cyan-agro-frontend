import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { LinearProgress } from "@material-ui/core/";
import axios from "axios";

export default class extends Component {
  state = { loading: true };
  async componentDidMount() {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const { id } = this.props.match.params;
    const { data: harvest } = await axios.get(`${api_endpoint}/harvests/${id}`);
    this.setState({ harvest, loading: false });
    console.log(harvest);
  }

  render() {
    if (this.state.loading) return <LinearProgress color="secondary" />;
    return (
      <Fragment>
        <p>This is a Harvest.</p>
      </Fragment>
    );
  }
}
