import React, { useEffect, useState } from "react";
import { Card, Spinner, Navbar, Button, Pagination ,Row,Col} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Dashboard.css";
import { VoteRequest } from "../../Redux/createAction/createAction";
import { ListPollRequest } from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";

const GuestDashboard = () => {
  const [pageSize, setpageSize] = useState(0);
  const [latestPoll, setlatestPoll] = useState([]);

  const [currentlength, setcurrentlength] = useState(5);
  const [currentpagelength,setcurrentpagelength]=useState(5)
  const [pageno,setpageno]=useState(1)
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(ListPollRequest());
  }, []);

  const pollList = useSelector((state) => {
    return state.PollListstatus.poll;
  });
  useEffect(() => {
    setlatestPoll(pollList);
  }, [pollList]);

  const poll = [...latestPoll].reverse();

  const currentPage = poll.slice(pageSize, pageSize + currentpagelength);

  useEffect(() => {
    setcurrentlength(currentPage.length);
  });

  const handleNextPage = () => {
    setpageSize((prev) => prev + currentpagelength);
    setpageno((prev)=>prev +1)
  };
  const handlePrevPage = () => {
    setpageSize((prev) => prev - currentpagelength);
    setpageno((prev)=>prev -1)
  };

  const pollstatus = useSelector((state) => {
    return state.PollListstatus.isPollfetched;
  });

  const _handleVote = (id, option) => {
    let usertoken = localStorage.getItem("token");
    let Vote = {
      id: id,
      option: option,
      token: usertoken,
    };

    localStorage.setItem(id, option);
    dispatch1(VoteRequest(Vote));
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  const _handlePageSize=(e)=>{
   
    setcurrentpagelength(parseInt(e.target.value))
  }
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Polling App</Navbar.Brand>
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
      <Row className="page">
    <Col className="d-flex justify-content-end pageno">Page No: {pageno} <div className="ml-3">
 <label>No of Polls per page : </label>
    <form >
      <select value={currentpagelength} onChange={(e)=>{_handlePageSize(e)}}>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      </form>
      </div>
    </Col>
   
  </Row>



      {pollstatus === false ? (
        <Spinner className="spinner" animation="border" variant="primary" />
      ) : null}

      {currentPage.map((item) => (
        <Card key={item._id} className="Card">
          <div className="Card1">
            <Card.Title>Title :{item.title}</Card.Title>
            {item.options.map((option, i) => (
              <div key={i}>
                <input
                  type="radio"
                  name={item._id}
                  disabled={localStorage.getItem(item._id) ? true : false}
                  onChange={() => {
                    _handleVote(item._id, option.option);
                  }}
                />
                <label>{option.option}</label>
              </div>
            ))}
          </div>
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
            disabled={pageSize >= poll.length - 5 ? true : false}
            onClick={handleNextPage}
          >
            Next
          </Pagination.Next>
        </Pagination>
      )}
    </React.Fragment>
  );
};

export default GuestDashboard;
