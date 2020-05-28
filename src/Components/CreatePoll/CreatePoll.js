import React, { useState } from "react";
import { Form, Button, Navbar } from "react-bootstrap";
import "./CreatePoll.css";
import { CreateNewPollRequest } from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link, Redirect } from "react-router-dom";

const CreatePoll = () => {
  const [title, settitle] = useState("");
  const [options, setoptions] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddOption = () => {
    setoptions((prevState) => [...prevState, ""]);
  };
  const handleonChangeAddOption = (e, index) => {
    e.preventDefault();
    const data = [...options];
    data[index] = e.target.value;
    setoptions(data);
  };
  const state = useSelector((state) => {
    return state.CreateNewPollstatus;
  });

  const handlePollSubmit = () => {
    let poll = {
      title: title,
      options: options,
    };
    dispatch(CreateNewPollRequest(poll));
    console.log(state.isLoading);
  };
  console.log(options);
  const handleRemoveOption = (index) => {
    const data = [...options];
    data.splice(index, 1);
    setoptions(data);
  };

  if (state.isLoading === true) {
    return <Redirect to="/admin/dashboard" />;
  }
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Polling App</Navbar.Brand>
        </Link>

        <Link to="/dashboard">
          <Button variant="outline-primary">Dashboard</Button>
        </Link>
      </Navbar>
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
        <React.Fragment key={index}>
          <div className="options">
            <Form.Label>Option:{index + 1}</Form.Label>
            <div className="optionwithbutton">
              <Form.Control
                type="text"
                placeholder="Enter Option here"
                value={options[index]}
                onChange={(e) => handleonChangeAddOption(e, index)}
              />
              <span className="removebutton">
                <Button
                  onClick={() => {
                    handleRemoveOption(index);
                  }}
                  variant="danger"
                >
                  Remove
                </Button>
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className="Addbutton">
        {title ? (
          <Button onClick={handleAddOption} variant="primary">
            Add Option
          </Button>
        ) : null}
        <span className="pollsubmit">
          {options.length ? (
            <Button onClick={handlePollSubmit} variant="success">
              Submit Poll
            </Button>
          ) : null}
        </span>
      </div>
    </React.Fragment>
  );
};

export default CreatePoll;
