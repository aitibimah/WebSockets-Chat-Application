import React, { Component } from "react";
import { getRequestsSendByMe } from "../actions/ContactActions"
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ContactResult extends Component {


    constructor() {
        super();

    }


    componentDidMount() {
        this.props.getRequestsSendByMe()
    }

    render() {
        const { contactv } = this.props;
        const { sendRequests } = this.props.contact;


        if (sendRequests.filter(e => e.userReceiver.id === contactv.id).length > 0) {

            return (
                <li className="contact card mb-1">
                    <div className="wrap">
                        <img src={`/images/profile/${contactv.profile.image}`} alt="" />
                        <div className="row">
                            <div className="meta col-sm-10">
                                <p className="name">{contactv.profile.firstName + " " + contactv.profile.lastName}</p>
                                <p className="preview">{contactv.profile.bio}</p>
                            </div>
                            <div className="col-sm-2">
                                <div
                                    className="btn disabled  addFriend btn-success"
                                >Sent</div>
                            </div>
                        </div>
                    </div>
                </li>
            )
        }



        return (
            <li className="contact card mb-1">
                <div className="wrap">
                    <img src={`/images/profile/${contactv.profile.image}`} alt="" />
                    <div className="row">
                        <div className="meta col-sm-10">
                            <p className="name">{contactv.profile.firstName + " " + contactv.profile.lastName}</p>
                            <p className="preview">{contactv.profile.bio}</p>
                        </div>
                        <div className="col-sm-2">
                            <div
                                onClick={(e) => {
                                    this.props.handelSendResult(contactv.id)
                                    e.target.innerText = "Sent"
                                    e.target.style.backgroundColor = "#5cb85c"
                                    e.currentTarget.className += " disabled"
                                }}
                                className="btn addFriend"
                            >Add</div>
                        </div>
                    </div>
                </div>
            </li>
        )

    }


}



ContactResult.propTypes = {
    contact: PropTypes.object.isRequired,
    getRequestsSendByMe: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    contact: state.contact,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { getRequestsSendByMe }
)(ContactResult);


