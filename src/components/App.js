import React, { Component, Fragment } from "react";
import { Header, Home, Footer, Mill, Harvest, NotFound } from "./layouts/";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <div style={{ padding: 10 }}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mill/:id" component={Mill} />
              <Route path="/harvest/:id" component={Harvest} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
