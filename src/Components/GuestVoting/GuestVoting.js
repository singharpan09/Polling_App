import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {ListPollRequest ,VoteRequest} from "../../Redux/createAction/createAction";
import {Spinner,Card,Navbar,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const GuestVoting=()=>{
  const [error,seterror]=useState(false)
  const [poll,setpoll]= useState([])
  const [item,setitem]=useState()
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
      setpoll(pollList);
    }, [pollList]);
  
    const pollstatus = useSelector((state) => {
      return state.PollListstatus.isPollfetched;
    });
  
    const _handleVote = (id, option) => {
      let usertoken =  localStorage.getItem("token");
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
  useEffect(()=>{
    var item = poll[Math.floor(Math.random() * poll.length)];
    if(item){
    
      setitem(item)
    }
   
  },[poll.length])

  const _handledoubleVoteClick=(id)=>{
    console.log(id)
    console.log("false")
  
    if(localStorage.getItem(id) ){
      console.log("true")
      seterror(true)
    }
  } 
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

        {pollstatus === false ? (
          <Spinner className="spinner" animation="border" variant="primary" />
        ) : null}
  
          { item &&
     (<Card key={item._id} className="Card" >
     <div className="Card1" onClick={()=>_handledoubleVoteClick(item._id)}>
       <Card.Title>Title :{item.title}</Card.Title>
       {item.options.map((option, i) => (
         <div key={i} >
           <input
             type="radio"
             name={item._id}
             disabled={localStorage.getItem(item._id) ? true : false}
            //  onClick={()=>_handledoubleVoteClick(item._id,option.option)}
             onChange={() => {
               _handleVote(item._id, option.option);
             }}
           />
           <label>{option.option}</label> 

         </div>
       ))}
      
          {error===true ?<div><hr/><center><p style={{color:"red"}}>**You have alredy voted this Poll**</p></center></div>:null }
     </div>
   </Card>)
          }
      </React.Fragment>
    )
  }

export default GuestVoting;