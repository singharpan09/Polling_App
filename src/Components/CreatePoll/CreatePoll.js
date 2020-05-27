import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./CreatePoll.css";

const CreatePoll = () => {
  const [title, settitle] = useState("");
  const [options, setoptions] = useState([]);
  console.log(title);
  return (
    <React.Fragment>
      <div className="poll">
        <center>
          <h3>Create New Poll</h3>
        </center>
      </div>

      <div className="title1">
        <Form.Label>
          <h2>Title</h2>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
      </div>
      {/* <div className="options">
        <Form.Label>Option</Form.Label>
        <Form.Control type="text" placeholder="Enter option here" />
      </div> */}
      {title ? <Button variant="primary">Add Option</Button> : null}
    </React.Fragment>
  );
};

export default CreatePoll;
