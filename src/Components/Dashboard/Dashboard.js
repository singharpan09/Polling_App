import React, { useEffect, useState } from "react";
import {
  Card,
  Spinner,
  Navbar,
  Button,
  Pagination,
  Badge,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Dashboard.css";
import UpdateTitle from "../Updatepoll/UpdatePollTitle";
import { ListPollRequest } from "../../Redux/createAction/createAction";
import {
  UpdatePollTitleRequest,
  DeletePollRequest,
  DeleteOptionRequest,
  AddNewOptionRequest,
} from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";
import DeletePoll from "../Updatepoll/DeletePoll";
import DeleteOption from "../Updatepoll/DeleteOption";
import AddNewOption from "../Updatepoll/AddNewOption";

const Dashboard = () => {
  const [pageSize, setpageSize] = useState(0);
  const [latestPoll, setlatestPoll] = useState([]);
  // const [currentlength, setcurrentlength] = useState(5);
  const [showTitleUpdate, setshowTitleUpdate] = useState(false);
  const [showDeletePoll, setshowDeletePoll] = useState(false);
  const [showDeleteOption, setshowDeleteOption] = useState(false);
  const [showAddNewOption, setshowAddNewOption] = useState(false);

  const [Title, setTitle] = useState("");
  const [id, setid] = useState("");
  const [togopage, settotopage] = useState(1);
  const [currentpagelength,setcurrentpagelength]=useState(5)
  const [pageno,setpageno]=useState(1)


  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const dispatch2 = useDispatch();
  const dispatch3 = useDispatch();
  const dispatch4 = useDispatch();
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
  const currentPage = poll.slice(pageSize, pageSize + currentpagelength);

  // useEffect(() => {
  //   setcurrentlength(currentPage.length);
  // });
  const handleNextPage = () => {
    setpageSize((prev) => prev + currentpagelength);
    setpageno((prev)=>prev +1)
  };
  const handlePrevPage = () => {
    setpageSize((prev) => prev - currentpagelength);
    setpageno((prev)=>prev -1)
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
  const _handleDeletePoll = (title, id) => {
    setshowDeletePoll(!showDeletePoll);
    setTitle(title);
    setid(id);
  };
  const _handleCloseDeleteModel = () => {
    setshowDeletePoll(false);
  };
  const _handlePollDeletion = () => {
    let Pollid = {
      id: id,
    };
    dispatch2(DeletePollRequest(Pollid));
    setid("");
    setTitle("");
    setshowDeletePoll(false);
  };
  const _handleOptionDelete = (option, id) => {
    setTitle(option);
    setid(id);
    setshowDeleteOption(true);
  };
  const _handleCloseOption = () => {
    setshowDeleteOption(false);
  };
  const _handleDeletePollOption = () => {
    let optionid = {
      id: id,
      text: Title,
    };
    dispatch3(DeleteOptionRequest(optionid));
    setshowDeleteOption(false);
    setid("");
    setTitle("");
  };
  const _handleAddNewOption = (id) => {
    setid(id);
    setshowAddNewOption(true);
  };
  const _handleCloseNewOption = () => {
    setshowAddNewOption(false);
  };
  const _handleOptionChange = (e) => {
    setTitle(e.target.value);
  };
  const _handleUpdateOption = () => {
    let Optiondata = {
      id: id,
      option: Title,
    };
    dispatch4(AddNewOptionRequest(Optiondata));
    setid("");
    setTitle("");
    setshowAddNewOption(false);
  };


  const _handlePageSize=(e)=>{
   
    setcurrentpagelength(parseInt(e.target.value))
  }
  const _handleEditPoll=(id)=>{
history.push(`/admin/edit/${id}`);


  }
  console.log(poll)
  // <EditPoll EditDate={item} handleOptionDelete={_handleOptionDelete()}/>
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
      <UpdateTitle
        show={showTitleUpdate}
        onCloseModel={() => _handlecloseModel()}
        title={Title}
        onTitleChange={(e) => _handletitleChange(e)}
        onUpdateTitle={() => {
          _handleUpdateTitle();
        }}
      />
      <DeletePoll
        show={showDeletePoll}
        title={Title}
        onCloseDeleteModel={() => {
          _handleCloseDeleteModel();
        }}
        onDeletePoll={() => _handlePollDeletion()}
      />
      <DeleteOption
        show={showDeleteOption}
        option={Title}
        onCloseOption={() => {
          _handleCloseOption();
        }}
        onDeletePollOption={() => {
          _handleDeletePollOption();
        }}
      />
      <AddNewOption
        show={showAddNewOption}
        onCloseNewOption={() => _handleCloseNewOption()}
        onOptionChange={(e) => {
          _handleOptionChange(e);
        }}
        title={Title}
        onUpdateOption={() => {
          _handleUpdateOption();
        }}
      />
      {currentPage.map((item) => (
        <Card key={item._id} className="Card">
                  
          <Card.Body onClick={()=>_handleEditPoll(item._id)}>
            <div className="Card1">
              <Card.Title>Title :{item.title}</Card.Title>
             
              {item.options.map((option, i) => (
                <div key={i}>
                  <input type="radio" name={item._id} />
                  <label>{option.option}</label>
                  <div className="d-flex justify-content-end">
                    <label>
                      <Badge variant="light">{item.__v}</Badge>
                    </label>
                    
                    <Button
                      size={"sm"}
                      onClick={() =>
                        _handleOptionDelete(option.option, item._id)
                      }
                      className="ml-5"
                      variant="outline-danger"
                    >
                      Delete
                    </Button>
                  </div>
                 
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
            <Button
              className="ml-2"
              variant="outline-danger"
              onClick={() => {
                _handleDeletePoll(item.title, item._id);
              }}
            >
              Delete Poll
            </Button>
            <Button
              onClick={() => {
                _handleAddNewOption(item._id);
              }}
              className="ml-2"
              variant="outline-warning"
            >
              Add Option
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