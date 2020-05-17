/**
 * App Router
 *
 * This is where we centrally handling all of the routes and redirects for our
 * SPA.
 */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default AppRouter;
