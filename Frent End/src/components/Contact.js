import React from 'react'
import { Link, withRouter } from "react-router-dom"
const Contact = ({ contact, onClick }) => {

    return (
        <li className="contact">
            <div className="wrap">
                <span className="contact-status online" />
                <React.Fragment>
                    <Link
                        className="stretched-link"
                        onClick={() => { onClick(contact.user.id) }}
                    //onClick={() => { this.props.handelSendResult(contact.id) }} 
                    >
                        <img src={`/images/profile/${contact.user.profile.image}`} alt="" />
                        <div className="meta">
                            <p className="name">{contact.user.profile.firstName + " " + contact.user.profile.lastName}</p>
                            <p className="preview">{contact.user.profile.bio}</p>
                        </div>

                    </Link>

                </React.Fragment>

            </div>
        </li>
    )
}

export default withRouter(Contact)