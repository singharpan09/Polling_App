import React, { useEffect } from "react";

import { AddPollRequest } from "../../Redux/createAction/createAction";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AddPollRequest());
    console.log("add poll called");
  }, []);

  return (
    <React.Fragment>
      <center>
        <h3>Welcome to Poll</h3>
      </center>
    </React.Fragment>
  );
};

export default Dashboard;
