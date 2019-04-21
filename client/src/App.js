import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./containers/Login/login";
import SignUp from "./containers/signup/signup";
import MainPage from "./containers/MainPage/mainPage";
import AddPatient from "./containers/addPatient/addPatient";
import AddRx from "./containers/addRx/addRx";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mainpage" component={MainPage} />
        <Route exact path="/addpatient" component={AddPatient} />
        <Route exact path="/addRx" component={AddRx} />
      </Switch>
    </div>
  </Router>
);

export default App;
