import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {ListPollRequest} from "../../Redux/createAction/createAction";
import {Spinner,Card,Navbar,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const GuestVoting=()=>{
    const dispatch = useDispatch();
    const dispatch1 = useDispatch();
    const history = useHistory();
  
    useEffect(() => {
      dispatch(ListPollRequest());
    }, []);
  
    const pollList = useSelector((state) => {
      return state.PollListstatus.poll;
    });
    // useEffect(() => {
    //   setlatestPoll(pollList);
    // }, [pollList]);
  
    const pollstatus = useSelector((state) => {
      return state.PollListstatus.isPollfetched;
    });
  
    // const _handleVote = (id, option) => {
    //   let usertoken = localStorage.getItem("token");
    //   let Vote = {
    //     id: id,
    //     option: option,
    //     token: usertoken,
    //   };
  
    //   localStorage.setItem(id, option);
    //   dispatch1(VoteRequest(Vote));
    // };
  
    const handleLogout = () => {
      localStorage.clear();
      history.push("/");
    };
  
 
    return(
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

        {/* {pollstatus === false ? (
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
       
        )} */}
      </React.Fragment>
    )
}

export default GuestVoting;