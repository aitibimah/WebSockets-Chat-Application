import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import securityReducer from "./securityReducer";
import profileReducer from "./profileReducer";
import contactReducer from "./contactReducer";
import conversationReducer from "./conversationReducer";
import groupReducer from "./groupReducer";


export default combineReducers({
  errors: errorReducer,
  security: securityReducer,
  profile: profileReducer,
  contact: contactReducer,
  conversation: conversationReducer,
  my_contact: groupReducer
});
