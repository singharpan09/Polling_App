import React from "react";
import Registration from "./Components/Registration/registrationForm";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import CreatePoll from "./Components/CreatePoll/CreatePoll";
import Login from "./Components/Login/Login";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRouting from "./PrivateRouting";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

          <Route exact path="/" component={Login} />
          <Route path="/registration" component={Registration} />
          <PrivateRouting path="/dashboard" component={Dashboard} />
          <PrivateRouting path="/createpoll" component={CreatePoll} />

        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
