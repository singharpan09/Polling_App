import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./CreatePoll.css";
import { CreateNewPollRequest } from "../../Redux/createAction/createAction";

const CreatePoll = () => {
  const [title, settitle] = useState("");
  const [options, setoptions] = useState([]);

  const handleAddOption = () => {
    setoptions((prevState) => [...prevState, ""]);
  };
  const handleonChangeAddOption = (e, index) => {
    e.preventDefault();
    const data = [...options];
    data[index] = e.target.value;
    setoptions(data);
  };
  console.log(options);
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
      <br />
      {options.map((option, index) => (
        <div className="options" key={index}>
          <Form.Label>Option:{index + 1}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Option here"
            value={options[index]}
            onChange={(e) => handleonChangeAddOption(e, index)}
            required
          />
        </div>
      ))}
      <div className="Addbutton">
        {title ? (
          <Button onClick={handleAddOption} variant="primary">
            Add Option
          </Button>
        ) : null}
        <span className="pollsubmit">
          {options.length ? (
            <Button variant="success">Submit Poll</Button>
          ) : null}
        </span>
      </div>
    </React.Fragment>
  );
};

export default CreatePoll;
