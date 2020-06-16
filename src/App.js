import React from "react";
import Registration from "./Components/Registration/registrationForm";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import CreatePoll from "./Components/CreatePoll/CreatePoll";
import Login from "./Components/Login/Login";
import GuestDashboard from "./Components/Dashboard/GuestDashboard";
import EditPoll from "./Components/Updatepoll/EditPoll"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRouting from "./PrivateRouting";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <PrivateRouting path="/dashboard" component={GuestDashboard} />
        <PrivateRouting path="/admin/dashboard" component={Dashboard} />
        <PrivateRouting path="/createpoll" component={CreatePoll} />
        <PrivateRouting path="/admin/edit/:id"component={EditPoll}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
