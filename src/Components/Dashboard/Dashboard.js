import React, { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import "./Dashboard.css";

import { AddPollRequest } from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AddPollRequest());
  }, []);
  const pollList = useSelector((state) => {
    return state.PollListstatus.poll;
  });
  const pollstatus = useSelector((state) => {
    return state.PollListstatus.isPollfetched;
  });
  console.log(pollstatus);
  return (
    <React.Fragment>
      <div className="title">
        <center>
          <h3>Welcome to Poll</h3>
        </center>
      </div>
      {pollstatus === false ? (
        <Spinner className="spinner" animation="border" variant="primary" />
      ) : null}
      {pollList.map((item) => (
        <Card className="Card" key={item._id}>
          <div className="Card1">
            <Card.Title>Title :{item.title}</Card.Title>
            {item.options.map((option) => (
              <div>
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
