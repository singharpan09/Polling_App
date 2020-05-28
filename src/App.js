import React from "react";
import Registration from "./Components/Registration/registrationForm";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import CreatePoll from "./Components/CreatePoll/CreatePoll";
import Login from "./Components/Login/Login";
// import NavBar from "./navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/createpoll" component={CreatePoll} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
