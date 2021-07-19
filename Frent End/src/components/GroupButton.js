import React from 'react'
import { Link } from "react-router-dom"


const GroupButton = () => {
    return (
        <React.Fragment>
            <Link to="/GroupsList" id="addcontact" className="btn">
                <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
                <span>Groups</span>
            </Link>
        </React.Fragment>
    )
}



export default GroupButton
