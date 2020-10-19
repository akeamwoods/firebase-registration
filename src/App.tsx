import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import { NotificationContainer } from "./components/Alert/container";
import { PrivateRoute } from "./components/PrivateRoute";
import { SideMenu } from "./components/SideMenu";
import { LoginHandler } from "./handlers/LoginHandler";
import { HomeHandler } from "./handlers/HomeHandler";
import { ProfileHandler } from "./handlers/ProfileHandler";
import { useTypedSelector } from "./store";

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
            path="/profile"
            component={ProfileHandler}
            isAuth={user !== undefined}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
