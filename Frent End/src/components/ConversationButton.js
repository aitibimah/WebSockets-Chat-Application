import React from 'react'
import { Link } from "react-router-dom"


const ConversationButton = () => {
    return (
        <React.Fragment>
            <Link to="/ConversationList" id="addcontact" className="btn">
                <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
                <span>Chat</span>
            </Link>
        </React.Fragment>
    )
}



export default ConversationButton
