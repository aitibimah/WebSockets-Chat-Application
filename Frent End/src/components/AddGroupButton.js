import { Link } from "react-router-dom"
import React from "react"

const AddGroupButton = () => {
    return (

        <React.Fragment>
            <Link to="/addGroup" className="btn">
                <i className="fa fa-cog fa-fw" aria-hidden="true" />
                <span>Add Group</span>
            </Link>
        </React.Fragment>
    )
}

export default AddGroupButton
