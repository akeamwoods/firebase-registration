import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
  isAuth: boolean;
}> = ({ component, path, exact, isAuth }) => {
  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/" />
  );
};
