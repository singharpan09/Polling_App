import React, { useEffect } from "react";

import { AddPollRequest } from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AddPollRequest());
    console.log("add poll called");
  }, []);
  const state = useSelector((state) => {
    return state;
  });
  console.log(state);
  return (
    <React.Fragment>
      <center>
        <h3>Welcome to Poll</h3>
      </center>
    </React.Fragment>
  );
};

export default Dashboard;
