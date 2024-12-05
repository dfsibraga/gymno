import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./public/login/Login";
import Settings from "./private/settings/Settings";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </BrowserRouter>
  );
}

export default Routes;
