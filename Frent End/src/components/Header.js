import { Link } from "react-router-dom"
import React, { Component } from 'react'
import { logout } from "../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Header extends Component {


    logout() {
        this.props.logout();
        window.location.href = "/";
    }




    render() {
        const { title } = this.props;
        const { image } = this.props;
        const { type } = this.props;

        switch (type) {
            case "EditProfile":
                return (
                    <div className="contact-profile">
                        <img src={image} alt="" />
                        <p>{title}</p>
                        <div className="social-media">
                            <React.Fragment>
                                <Link
                                    className="stretched-link"
                                    to="/logout"
                                    onClick={this.logout.bind(this)}
                                >
                                    <i className="fa fa-sign-out" aria-hidden="true" />
                                </Link>
                            </React.Fragment>
                        </div>
                    </div>

                );




            case "group":
                return (
                    <div className="contact-profile">
                        <img src={image} alt="" />
                        <p>{title}</p>
                        <div className="social-media">
                            <React.Fragment>
                                <Link
                                    className="stretched-link"
                                    to="/logout"
                                    onClick={this.logout.bind(this)}
                                >
                                    <i className="fa fa-sign-out" aria-hidden="true" />
                                </Link>
                            </React.Fragment>
                        </div>
                    </div>

                );


            default:
                return (
                    <div className="contact-profile">
                        <img src={image} alt="" />
                        <p>{title}</p>
                        <div className="social-media">

                        </div>
                    </div>
                );
        }

    }

}


Header.propTypes = {
    logout: PropTypes.func.isRequired

};


export default connect(
    null,
    { logout }
)(Header);