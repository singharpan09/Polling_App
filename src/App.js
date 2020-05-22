import React from "react";
import RegistrationForm from "./Registration/registrationForm";
import Login from "../src/Login/Login";
import NavBar from "./navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={RegistrationForm} />
        {/* <RegistrationForm /> */}
        <Route path="/login" component={Login} />
        {/* <Login /> */}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
