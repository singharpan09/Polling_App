import React from "react";
import Registration from "./Components/Registration/registrationForm";
import Login from "./Components/Login/Login";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import NavBar from "./navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />

        <Route exact path="/" component={Registration} />

        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
