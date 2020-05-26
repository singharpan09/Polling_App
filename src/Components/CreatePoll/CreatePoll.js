import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./CreatePoll.css";

const CreatePoll = () => {
  const [title, settitle] = useState("");
  const [options, setoptions] = useState([]);
  return (
    <React.Fragment>
      <center>
        <h3>Create New Poll</h3>
      </center>
      <div className="title">
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
    </React.Fragment>
  );
};

export default CreatePoll;
