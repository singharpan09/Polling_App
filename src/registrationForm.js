import React from "react";
import { Button, Navbar } from "react-bootstrap";

const RegistrationForm = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Polling App</Navbar.Brand>

        <Button variant="outline-success">Login</Button>
      </Navbar>
    </React.Fragment>
  );
};

export default RegistrationForm;
