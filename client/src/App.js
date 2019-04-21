import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./containers/Login/login";
import SignUp from "./containers/signup/signup";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  </Router>
);

export default App;
