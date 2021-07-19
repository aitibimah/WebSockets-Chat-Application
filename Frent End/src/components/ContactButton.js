import React from 'react'
import { Link } from "react-router-dom"


const ContactButton = () => {
    return (
        <React.Fragment>
            <Link to="/ContactsList" id="addcontact" className="btn">
                <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
                <span>Contacts</span>
            </Link>
        </React.Fragment>
    )
}



export default ContactButton
