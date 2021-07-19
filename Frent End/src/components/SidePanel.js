import Profile from './Profile'
import SearchComposer from './SearchComposer'
import ContactsList from './ContactsList'
import ConversationList from './ConversationList'



import GroupList from './GroupList'
import { BrowserRouter as Router, Switch } from "react-router-dom";


import BottomBar from './BottomBar'
import OptionBar from './OptionBar'
import SecuredRoute from "../securityUtils/SecureRoute";
import { Component } from 'react'





class SidePanel extends Component {

    render() {

        if (window.location.pathname === '/register' || window.location.pathname === '/login') return null;
        return (
            <div id="sidepanel">
                <Profile />
                <OptionBar />
                <Switch>
                    <SecuredRoute exact path="/ConversationList" component={ConversationList} />
                    <SecuredRoute exact path="/GroupsList" component={GroupList} />
                    {/* SearchComposer component */}
                    <ContactsList exact path="/ContactsList" component={ContactsList} />
                </Switch>
                <BottomBar />


            </div>
        )

    }



}

export default SidePanel
