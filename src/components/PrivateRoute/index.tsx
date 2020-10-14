import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useTypedSelector } from "../../store";

export const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = ({ component, path, exact }) => {
  const isAuth = useTypedSelector((state) => state.user !== undefined);

  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/" />
  );
};
