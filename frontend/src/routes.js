import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./public/login/Login";
import Settings from "./private/settings/Settings";

function Routes() {
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return localStorage.getItem("token") ? children : <Redirect to="/" />;
        }}
      />
    );
  }

  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Login />
      </Route>
      <PrivateRoute path="/settings">
        <Settings />
      </PrivateRoute>
    </BrowserRouter>
  );
}

export default Routes;
