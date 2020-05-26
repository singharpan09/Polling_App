import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import { AddPollRequest } from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AddPollRequest());
    console.log("add poll called");
  }, []);
  const pollList = useSelector((state) => {
    return state.PollListstatus.poll;
  });
  console.log(pollList);
  return (
    <React.Fragment>
      <center>
        <h3 style={{ color: "#0099ff" }}>Welcome to Poll</h3>
      </center>

      {pollList.map((item) => (
        <Card key={item._id}>
          <Card.Title>Title :{item.title}</Card.Title>
          {item.options.map((option) => (
            <div>
              <input type="radio" />
              <label>{option.option}</label>
            </div>
          ))}
        </Card>
      ))}
    </React.Fragment>
  );
};

export default Dashboard;
