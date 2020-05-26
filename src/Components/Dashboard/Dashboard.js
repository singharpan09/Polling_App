import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [poll, setPoll] = useState([]);

  useEffect(() => {
    axios
      .get("https://secure-refuge-14993.herokuapp.com/list_polls")
      .then((res) => setPoll(res.data.data));
  }, []);
  console.log(poll);
  return (
    <React.Fragment>
      <center>
        <h3>Welcome to Poll</h3>
        {poll.map((list) => (
          <ol style={{ listStyleType: "number" }}>
            <li>{list.title}</li>
            {list.options.map((Option) => (
              <ol>
                <li>{Option.option}</li>
              </ol>
            ))}
          </ol>
        ))}
      </center>
    </React.Fragment>
  );
};

export default Dashboard;
