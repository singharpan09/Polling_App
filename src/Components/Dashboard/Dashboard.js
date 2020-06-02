import React, { useEffect, useState } from "react";
import { Card, Spinner, Navbar, Button, Pagination } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Dashboard.css";
import UpdateTitle from "../Updatepoll/UpdatePollTitle";
import { ListPollRequest } from "../../Redux/createAction/createAction";
import { UpdatePollTitleRequest } from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const [pageSize, setpageSize] = useState(0);
  const [latestPoll, setlatestPoll] = useState([]);

  const [currentlength, setcurrentlength] = useState(5);
  const [showTitleUpdate, setshowTitleUpdate] = useState(false);
  const [Title, setTitle] = useState("");
  const [id, setid] = useState("");

  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
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

  useEffect(() => {
    setlatestPoll(pollList);
  }, [pollList]);

  const poll = [...latestPoll].reverse();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  const currentPage = poll.slice(pageSize, pageSize + 5);

  useEffect(() => {
    setcurrentlength(currentPage.length);
  });

  const handleNextPage = () => {
    setpageSize((prev) => prev + 5);
  };
  const handlePrevPage = () => {
    setpageSize((prev) => prev - 5);
  };

  const _handleshowTitle = (title, id) => {
    setshowTitleUpdate(true);
    setTitle(title);
    setid(id);
  };
  const _handletitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const _handlecloseModel = () => {
    setshowTitleUpdate(false);
  };

  const _handleUpdateTitle = () => {
    let titleUpdate = {
      id: id,
      Title: Title,
    };

    dispatch1(UpdatePollTitleRequest(titleUpdate));
    setshowTitleUpdate(false);
    setTitle("");
    setid("");
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
      <UpdateTitle
        show={showTitleUpdate}
        onCloseModel={() => _handlecloseModel()}
        title={Title}
        onTitleChange={(e) => _handletitleChange(e)}
        onUpdateTitle={() => {
          _handleUpdateTitle();
        }}
      />
      {currentPage.map((item) => (
        <Card key={item._id} className="Card">
          <Card.Body>
            <div className="Card1">
              <Card.Title>Title :{item.title}</Card.Title>
              {item.options.map((option, i) => (
                <div key={i}>
                  <input type="radio" />
                  <label>{option.option}</label>
                </div>
              ))}
            </div>

            <hr />
            <Button
              variant="outline-warning"
              onClick={() => {
                _handleshowTitle(item.title, item._id);
              }}
            >
              Update Title
            </Button>
          </Card.Body>
        </Card>
      ))}

      {poll.length !== 0 && (
        <Pagination>
          <Pagination.Prev
            disabled={pageSize == 0 ? true : false}
            onClick={handlePrevPage}
          >
            Prev
          </Pagination.Prev>

          <Pagination.Next
            disabled={pageSize >= 75 ? true : false}
            onClick={handleNextPage}
          >
            Next
          </Pagination.Next>
        </Pagination>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
