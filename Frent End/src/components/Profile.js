import React, { Component } from "react";
import { Link } from "react-router-dom"
import { getProfile } from "../actions/profileActions"
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Profile extends Component {

    componentDidMount() {
        this.props.getProfile();
    }

    render() {

        const { profile } = this.props.profile;
        return (

            <div id="profile">
                <div className="wrap">



                    <React.Fragment>
                        <Link className="link-light" to="/EditProfile">
                            <img id="profile-img" src={`/images/profile/${profile.image}`} className={profile.status == 1 ? "online" : ""} alt="" />
                            <p className="link-light">{profile.firstName + " " + profile.lastName}</p>
                        </Link>
                    </React.Fragment>

                    <i className="fa fa-chevron-down expand-button" aria-hidden="true" />
                    <div id="status-options">
                        <ul>
                            <li id="status-online" className="active">
                                <span className="status-circle" />
                                <p>Online</p>
                            </li>
                            <li id="status-away">
                                <span className="status-circle" />
                                <p>Away</p>
                            </li>
                            <li id="status-busy">
                                <span className="status-circle" />
                                <p>Busy</p>
                            </li>
                            <li id="status-offline">
                                <span className="status-circle" />
                                <p>Offline</p>
                            </li>
                        </ul>
                    </div>
                    <div id="expanded">
                        <label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true" /></label>
                        <input name="twitter" type="text" defaultValue="mikeross" />
                        <label htmlFor="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true" /></label>
                        <input name="twitter" type="text" defaultValue="ross81" />
                        <label htmlFor="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true" /></label>
                        <input name="twitter" type="text" defaultValue="mike.ross" />
                    </div>
                </div>
            </div>



        )



    }





}


Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    getProfile: PropTypes.func.isRequired
};




const mapStateToProps = state => ({
    profile: state.profile

});



export default connect(
    mapStateToProps,
    { getProfile }
)(Profile);
