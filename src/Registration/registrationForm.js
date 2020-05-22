import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../Registration/registrationForm.css";

const RegistrationForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <React.Fragment>
      <div class="reg">
        <h2>Signup</h2>
      </div>
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

          <Form.Group controlId="formGridState">
            <Form.Label>Select user type</Form.Label>
            <Form.Control as="select">
              <option>Admin</option>
              <option>Guest user</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary">Submit</Button>
        </Form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1410 230">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,64L34.3,53.3C68.6,43,137,21,206,53.3C274.3,85,343,171,411,224C480,277,549,299,617,256C685.7,213,754,107,823,101.3C891.4,96,960,192,1029,213.3C1097.1,235,1166,181,1234,160C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </React.Fragment>
  );
};

export default RegistrationForm;
