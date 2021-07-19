import React from 'react'
import { Link } from "react-router-dom"
const Group = ({ group }) => {
    return (
        <li className="contact">
            <div className="wrap">

                <React.Fragment>
                    <Link className="stretched-link" to="/Content" to={`/ContentGroup/${group.id}`}>
                        <img src="/images/groups/imageGroup.png" alt="" />
                        <div className="meta">
                            <p className="name">{group.nameGroup}</p>
                            <p className="preview">{group.description}</p>
                        </div>

                    </Link>
                </React.Fragment>


            </div>
        </li>
    )
}

export default Group
