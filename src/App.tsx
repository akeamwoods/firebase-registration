import React from "react";
import { Route, HashRouter } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { SideMenu } from "./components/SideMenu";
import { LoginHandler } from "./handlers/LoginHandler";
import { UsersHandler } from "./handlers/UsersHandler";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <SideMenu />
        <Route exact path="/" component={LoginHandler} />
        <PrivateRoute exact path="/users" component={UsersHandler} />
      </HashRouter>
    </div>
  );
}

export default App;
