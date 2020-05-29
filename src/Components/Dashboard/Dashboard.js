import React, { useEffect, useState } from "react";
import { Card, Spinner, Navbar, Button } from "react-bootstrap";
import { Link, useHistory, Redirect } from "react-router-dom";
import "./Dashboard.css";

import { ListPollRequest } from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(ListPollRequest());
  }, []);

  const pollList = useSelector((state) => {
    return state.PollListstatus.poll;
  });

  const pollstatus = useSelector((state) => {
    return state.PollListstatus.isPollfetched;
  });

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Link to="/login">
          <Navbar.Brand>Polling App</Navbar.Brand>
        </Link>

        <Link to="/createpoll">
          <Button variant="outline-primary">Create New Poll</Button>
        </Link>

        <Link to="/">
          <Button
            className="logout"
            variant="outline-danger"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Link>
      </Navbar>
      <div className="title">
        <center>
          <h3>Welcome to Poll</h3>
        </center>
      </div>
      {pollstatus === false ? (
        <Spinner className="spinner" animation="border" variant="primary" />
      ) : null}
      {pollList.map((item) => (
        <Card key={item._id} className="Card">
          <div className="Card1">
            <Card.Title>Title :{item.title}</Card.Title>
            {item.options.map((option, i) => (
              <div key={i}>
                <input type="radio" />
                <label>{option.option}</label>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default Dashboard;
