import React, { Component } from "react";

class MyContactResult extends Component {

    render() {
        const { contact } = this.props;
        return (
            <li className="contact card mb-1">
                <div className="wrap">
                    <img src={`/images/profile/${contact.user.profile.image}`} alt="" />
                    <div className="row">
                        <div className="meta col-sm-10">
                            <p className="name">{contact.user.profile.firstName + " " + contact.user.profile.lastName}</p>
                            <p className="preview">{contact.user.profile.bio}</p>
                        </div>

                        <div className="col-sm-2">
                            <div className="addFriendToGroup custom-control form-control-lg custom-checkbox">
                                <input
                                    name="users[]"
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={`customCheck${contact.user.id}`}
                                    value={contact.user.id}
                                    onClick={this.props.onClick}
                                // checked={this.props.isChecked}

                                />
                                <label className="custom-control-label" htmlFor={`customCheck${contact.user.id}`}
                                ></label>
                            </div>
                        </div>

                    </div>
                </div>
            </li>
        )

    }


}


export default MyContactResult
