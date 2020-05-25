import { combineReducers } from "redux";

import Registrationreducer from "./Registrationreducer";
const rootReducer = combineReducers({ Regis_status: Registrationreducer });

export default rootReducer;
