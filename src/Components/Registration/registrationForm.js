import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Spinner } from "react-bootstrap";
import "./registrationForm.css";

import { RegistationRequest } from "../../Redux/createAction/createAction";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [option, setoptions] = useState("Admin");
  const history = useHistory();

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  const regisstatus = state.Regis_status;
  const handlesubmit = () => {
    let formData = {
      username: username,
      password: password,
      option: option,
    };
    dispatch(RegistationRequest(formData));
    setusername("");
    setpassword("");
    if (regisstatus.isLoading === false && regisstatus.isRegistered === false) {
    }
  };
  if (regisstatus.isRegistered) {
    history.push("./login");
  }
  return (
    <React.Fragment>
      <div className="reg">
        <h2>Signup</h2>
      </div>

      <div className="regis">
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>Select user type</Form.Label>
            <Form.Control
              name={option}
              as="select"
              onChange={(e) => setoptions(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Guest">Guest User</option>
            </Form.Control>
          </Form.Group>
          <Button
            variant="primary"
            disabled={(username.length && password.length) === 0}
            onClick={() => handlesubmit()}
          >
            {regisstatus.isLoading === true ? (
              <Spinner
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : null}
            {regisstatus.isLoading === true ? null : <span>Submit</span>}
          </Button>
          <div>
            {regisstatus.error && regisstatus.error.error ? (
              <h6 style={{ color: "Red" }}>{regisstatus.error.message}</h6>
            ) : null}
          </div>
        </Form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1410 220">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,64L34.3,53.3C68.6,43,137,21,206,53.3C274.3,85,343,171,411,224C480,277,549,299,617,256C685.7,213,754,107,823,101.3C891.4,96,960,192,1029,213.3C1097.1,235,1166,181,1234,160C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </React.Fragment>
  );
};

export default Registration;
