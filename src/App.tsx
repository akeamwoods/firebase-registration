import React from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import { NotificationContainer } from "./components/Alert/container";
import { PrivateRoute } from "./components/PrivateRoute";
import { SideMenu } from "./components/SideMenu";
import { LoginHandler } from "./handlers/LoginHandler";
import { HomeHandler } from "./handlers/HomeHandler";
import { useTypedSelector } from "./store";
import { SettingsHandler } from "./handlers/SettingsHandler";

function App() {
  const user = useTypedSelector((state) => state.user);

  return (
    <div className="App">
      <NotificationContainer />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <SideMenu />
        <Switch>
          <Route exact path="/" component={LoginHandler} />
          <PrivateRoute
            exact
            path="/home"
            component={HomeHandler}
            isAuth={user !== undefined}
          />
          <PrivateRoute
            exact
            path="/settings"
            component={SettingsHandler}
            isAuth={user !== undefined}
          />
          {user === undefined && <Redirect to={"/"} />}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
