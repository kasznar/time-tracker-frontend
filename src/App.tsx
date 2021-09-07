import React from "react";
import "./App.css";
import { UsersPage } from "./users/UsersPage";
import { Menu } from "./layout/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TeamsPage } from "./teams/TeamsPage";
import { WorkdaysPage } from "./workdays/WorkdaysPage";

function App() {
  return (
    <Router>
      <Menu></Menu>
      <Switch>
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/teams">
          <TeamsPage />
        </Route>
        <Route path="/workdays">
          <WorkdaysPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
