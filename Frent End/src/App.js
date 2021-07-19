import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import store from "./store";

import SidePanel from './components/SidePanel'
import ContentChat from './components/ContentChat'
import ContentGroup from './components/ContentGroup'

import AddGroup from './components/AddGroup';
import EditProfile from './components/EditProfile';
import AddContact from './components/AddContact';


import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";



import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)


const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {


    if (window.location.pathname === '/ContactsList' || window.location.pathname === '/GroupsList' || window.location.pathname === 'ConversationList') {

      return (
        <Provider store={store}>
          <Router>

            {
              //Public Routes
            }

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {
              //Private Routes
            }


            <SecuredRoute component={() => <SidePanel />} />
            <SecuredRoute exact path={"/ContentChat/:id"} component={ContentChat} />
            <SecuredRoute exact path={"/ContentGroup/:id"} component={ContentGroup} />
            <SecuredRoute exact path="/AddGroup" component={AddGroup} />
            <SecuredRoute exact path="/EditProfile" component={() => <EditProfile />} />
            <SecuredRoute exact path="/AddContact" component={AddContact} />
            <h1 className="info_message">To Start A Conversation Please Select A Friend</h1>
          </Router>
        </Provider>

      );
    }

    return (
      <Provider store={store}>
        <Router>

          {
            //Public Routes
          }

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          {
            //Private Routes
          }


          <SecuredRoute component={() => <SidePanel />} />
          <SecuredRoute exact path={"/ContentChat/:id"} component={ContentChat} />
          <SecuredRoute exact path={"/ContentGroup/:id"} component={ContentGroup} />
          <SecuredRoute exact path="/AddGroup" component={AddGroup} />
          <SecuredRoute exact path="/EditProfile" component={() => <EditProfile />} />
          <SecuredRoute exact path="/AddContact" component={AddContact} />

        </Router>
      </Provider>

    );


  }
}

export default App;
