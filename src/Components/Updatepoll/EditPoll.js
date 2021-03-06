import React,{useEffect,useState} from "react";
import {Button,Card ,Badge} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import { Link} from "react-router-dom";
import {
    UpdatePollTitleRequest,
    DeletePollRequest,
    DeleteOptionRequest,
    AddNewOptionRequest,
  } from "../../Redux/createAction/createAction";
import {ListPollRequest} from "../../Redux/createAction/createAction";
import DeletePoll from "../Updatepoll/DeletePoll";
import DeleteOption from "../Updatepoll/DeleteOption";
import AddNewOption from "../Updatepoll/AddNewOption";
import UpdateTitle from "../Updatepoll/UpdatePollTitle";
const EditPoll=(props)=> {

  //*************States *******************************************/
    const [poll,setpoll]=useState([])
    const [Title, setTitle] = useState("");
    const [id, setid] = useState("");
    const [showTitleUpdate, setshowTitleUpdate] = useState(false);
    const [showDeletePoll, setshowDeletePoll] = useState(false);
    const [showDeleteOption, setshowDeleteOption] = useState(false);
    const [showAddNewOption, setshowAddNewOption] = useState(false);


//************************************************************************* *//



//********************Dispatch UseEffect ***********************************//
  
    const dispatch = useDispatch();
    const dispatch1 = useDispatch();
    const dispatch2 = useDispatch();
    const dispatch3 = useDispatch();
    const dispatch4 = useDispatch();

//*******************************************************************************//






//*****************************Poll List Request **********************************//

    useEffect(() => {
        dispatch(ListPollRequest());
      }, []);

 //***************************************************************************//



//*******************Get State from Store ***********************************//

 const pollList = useSelector((state) => {
        return state.PollListstatus.poll;
      });


//**************************************************************************//
  useEffect(()=>{
   setpoll(pollList)
   },[pollList])



   //**************Get poll id ******************/


const pollid=props.match.params.id


//************************************************* */



//********************Filter Poll based on ID ****************/

 const polltoedit=pollList.filter(item=>item._id==pollid)
 useEffect(()=>{
    setpoll(polltoedit)
 },[pollList])


//**************************************************************** */


//***************************************Update Title*******************************************//

 const _handleshowTitle = (title, id) => {
    setshowTitleUpdate(true);
    setTitle(title);
    setid(id);
  };

  const _handlecloseModel = () => {
    setshowTitleUpdate(false);
  };
  
  const _handleUpdateTitle = () => {
    let titleUpdate = {
      id: id,
      Title: Title,
    };
    if(titleUpdate.Title!==""){
      dispatch1(UpdatePollTitleRequest(titleUpdate));
      setshowTitleUpdate(false);
      setTitle("");
      setid("");
    }
    else{
      setshowTitleUpdate(false);
      setTitle("");
      setid("");
    }
  };

  //************************************* Update Title ****************************************//



  const _handletitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };



//*********************************************Delete Poll ***************************************//

  const _handleDeletePoll = (title, id) => {
    setshowDeletePoll(!showDeletePoll);
    setTitle(title.trim());
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
    setTitle(option.trim());
    setid(id);
    setshowDeleteOption(true);
  };


//*****************************************************************************//




  const _handleCloseOption = () => {
    setshowDeleteOption(false);




//****************Delete Poll ***************************************************//

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
//********************************************************************************** //



//*******************************************Update Option ************************************/

  const _handleUpdateOption = () => {
    let Optiondata = {
      id: id,
      option: Title,
    };
    if(Optiondata.option!==""){
      dispatch4(AddNewOptionRequest(Optiondata));
      setid("");
      setTitle("");
      setshowAddNewOption(false);
    }
    else{
      setid("");
      setTitle("");
      setshowAddNewOption(false);
    }
  };

  const _handleAddNewOption = (id) => {
    setTitle("");
    setid(id);
    setshowAddNewOption(!showAddNewOption);
  };
  const _handleCloseNewOption = () => {
    setshowAddNewOption(false);
  };
  const _handleOptionChange = (e) => {
    setTitle(e.target.value);
  };

  //****************************************************************************************//
    return(
        <React.Fragment>   
            <center><h1 style={{color:"#0099ff"}}>Edit the Poll</h1></center>

            <Link to="/admin/dashboard">
            <p>Go Back</p>
            </Link>
           
            {
            poll.map((item)=>
            <Card key={item._id} className="Card">         
            <Card.Body >
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
          </Card>)
            }

{/* //*****************************Modals Imports*********************************************/}

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


{/* //***************************************************************************** */ }


      </React.Fragment>
    );
  }
  
  export default EditPoll;