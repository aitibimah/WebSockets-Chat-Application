import { Link } from "react-router-dom"
import React from "react"

const AddContactButton = () => {
    return (
        <React.Fragment>
            <Link to="/addContact" id="addcontact" className="btn">
                <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
                <span>Add Contact</span>
            </Link>
        </React.Fragment>
    )
}

export default AddContactButton
