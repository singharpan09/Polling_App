import React, { useEffect, useState } from "react";
import _ from 'lodash';
import {
  Card,
  Spinner,
  Navbar,
  Button,
  Pagination,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Dashboard.css";
import { ListPollRequest } from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";
const Dashboard = () => {
  const [pageSize, setpageSize] = useState(0);
  const [latestPoll, setlatestPoll] = useState([]);
  const [currentpagelength,setcurrentpagelength]=useState(5)
  const [pageno,setpageno]=useState(1)
  const dispatch = useDispatch();
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

      const diff=pollList.filter(x=>x._id !==latestPoll._id)
      console.log(diff ,"sdfsfsf")
   
      setlatestPoll(pollList);
  }, [pollList]);






  const poll = [...latestPoll].reverse();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  const currentPage = poll.slice(pageSize, pageSize + currentpagelength);
  const handleNextPage = () => {
    setpageSize((prev) => prev + currentpagelength);
    setpageno((prev)=>prev +1)
  };
  const handlePrevPage = () => {
    setpageSize((prev) => prev - currentpagelength);
    setpageno((prev)=>prev -1)
  };
  const _handlePageSize=(e)=>{
    setcurrentpagelength(parseInt(e.target.value))
  }
const _handleEditPoll=(id)=>{
history.push(`/admin/edit/${id}`);
  }


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
          <h2>Welcome to Poll</h2>
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
          <Card.Body >
            <div className="Card1">
              <Card.Title>Title :{item.title}</Card.Title>  
              {item.options.map((option, i) => (
                <div key={i}>
                  <input type="radio" name={item._id} />
                  <label>{option.option}</label>
                </div>
              ))}
            </div>
            <hr />
            <Button variant="outline-danger" onClick={()=>_handleEditPoll(item._id)}>Manage</Button>  
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
export default Dashboard;