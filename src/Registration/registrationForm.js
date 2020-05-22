import React from "react";
import { Button, Navbar, Form } from "react-bootstrap";
import "../Registration/registrationForm.css";

const RegistrationForm = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Polling App</Navbar.Brand>

        <Button variant="outline-success">Login</Button>
      </Navbar>
      <div class="regis">
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default RegistrationForm;
