import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import NotificationPage from "./Noty/NotificationPage";
import StudentPage from "./Student/StudentPage";

export default function App2() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/student" component={StudentPage} />
        <Route path="/noty" component={NotificationPage} />
      </Switch>
    </Router>
  );
}
