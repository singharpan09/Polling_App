import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Navbar, Spinner } from "react-bootstrap";
import { LoginRequest } from "../../Redux/createAction/createAction";
import "./Login.css";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => {
    return state.Loginstatus;
  });
  const handleSubmit = () => {
    let loginData = {
      username: username.trim(),
      password: password.trim(),
    };
    dispatch(LoginRequest(loginData));
      setusername("");
      setpassword("");
  };
  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("userType") === "Admin"
    ) {
      history.push("/admin/dashboard");
    }  else {
      localStorage.clear();
      history.push("/");
    }
  }, []);


  useEffect(() => {
    if (localStorage.getItem("token") === false) {
      history.push("/");
    }
  });
  useEffect(() => {
    if (state.isLogin && localStorage.getItem("token")) {
      if (state.response.role.toLowerCase() === "admin") {
        history.push("/admin/dashboard");
        localStorage.setItem("userType", state.response.role);
      }  else {
        localStorage.clear();
        history.push("/");
      }
    }
  });
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Polling App</Navbar.Brand>
        </Link>
        <Link to="/registration">
          <Button variant="outline-primary">SignUp</Button>
        </Link>
      </Navbar>
      <div className="Login">
        <h2>Login</h2>
      </div>
      <div className="Login">
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
          <Button
            disabled={username && password ? false : true}
            onClick={handleSubmit}
            type="submit"
            variant="primary"
          >
            {state.isLoading ? (
              <Spinner
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Submit"
            )}
          </Button>
          {state.error ? (
            <h6 style={{ color: "red" }}>User not exists</h6>
          ) : null}
        </Form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1410 300">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,64L34.3,53.3C68.6,43,137,21,206,53.3C274.3,85,343,171,411,224C480,277,549,299,617,256C685.7,213,754,107,823,101.3C891.4,96,960,192,1029,213.3C1097.1,235,1166,181,1234,160C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </React.Fragment>
  );
};

export default Login;
