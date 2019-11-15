import React, { Component, Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Farm,
  Footer,
  HarvestCreate,
  Harvest,
  Header,
  Home,
  Mill,
  MillCreate,
  NotFound
} from "./layouts/";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Router>
          <Header />
          <div style={{ padding: 10 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mill/create" component={MillCreate} />
              <Route path="/mill/:id" component={Mill} />
              <Route path="/harvest/create/:millId" component={HarvestCreate} />
              <Route path="/harvest/create" component={HarvestCreate} />
              <Route path="/harvest/:id" component={Harvest} />
              <Route path="/farm/:id" component={Farm} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}
