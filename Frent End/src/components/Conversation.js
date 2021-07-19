import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Conversation extends Component {


    render() {

        const { conversation } = this.props
        const { user } = this.props.security;


        if (user.id == conversation.userReceiver.id) {
            return (
                <li className="contact">
                    <div className="wrap">
                        <span className="contact-status online" />

                        <React.Fragment>

                            <Link
                                className="stretched-link" to={`/ContentChat/${conversation.id}`} >
                                <img src={`/images/profile/${conversation.userSender.profile.image}`} alt="" />
                                <div className="meta">
                                    <p className="name">{conversation.userSender.profile.firstName + " " + conversation.userSender.profile.lastName}</p>
                                    <p className="preview">{/*conversation.chatHistory.messageList[0].text*/}</p>
                                </div>

                            </Link>
                        </React.Fragment>


                    </div>
                </li>
            )

        }

        return (
            <li className="contact">
                <div className="wrap">
                    <span className="contact-status online" />

                    <React.Fragment>

                        <Link
                            className="stretched-link" to={`/ContentChat/${conversation.id}`} >
                            <img src={`/images/profile/${conversation.userReceiver.profile.image}`} alt="" />
                            <div className="meta">
                                <p className="name">{conversation.userReceiver.profile.firstName + " " + conversation.userReceiver.profile.lastName}</p>
                                <p className="preview">{/*conversation.chatHistory.messageList[0].text*/}</p>
                            </div>

                        </Link>
                    </React.Fragment>


                </div>
            </li>
        )

    }

}


const mapStateToProps = state => ({

    security: state.security,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    {}
)(Conversation);


