import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./containers/Start/start";
import Login from "./containers/Login/login";
import Info from "./containers/Info/info";
import SignUp from "./containers/signup/signup";
import MainPage from "./containers/MainPage/mainPage";
import AddPatient from "./containers/addPatient/addPatient";
import AddRx from "./containers/addRx/addRx";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mainpage" component={MainPage} />
        <Route exact path="/addRx" component={AddRx} />
        <Route exact path="/addpatient" component={AddPatient} />
        <Route exact path="/signout" component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
