import React from "react";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import App from "./pages/App";
import Info from "./pages/Info";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import {  isAuthenticated } from "./services/auth";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  
  const Routes = () => (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/app" component={App} />
        <PrivateRoute path="/user/:id" component={Info} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;