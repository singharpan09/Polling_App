import React from "react";
import RegistrationForm from "./Registration/registrationForm";
import Login from "../src/Login/Login";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <RegistrationForm />
      <Login />
    </React.Fragment>
  );
}

export default App;
