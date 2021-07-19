import Header from "./Header"
import React, { Component } from "react";
import { UpdateProfile, getProfile } from "../actions/profileActions"
import PropTypes from "prop-types";
import { connect } from "react-redux";


class EditProfile extends Component {

    //set state
    constructor() {
        super();

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            image: '',
            phoneNumber: '',
            age: '',
            bio: '',
            status: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        const {
            id,
            firstName,
            lastName,
            image,
            phoneNumber,
            age,
            bio,
            status

        } = nextProps.profile;

        this.setState({
            id,
            firstName,
            lastName,
            image,
            phoneNumber,
            age,
            bio,
            status
        });
    }

    componentDidMount() {
        this.props.getProfile(this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    changeHandler = (e) => {
        this.setState({ image: e.target.files.item(0).name });

    };

    onSubmit(e) {
        e.preventDefault();

        const UpdateProfile = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            image: this.state.image,
            phoneNumber: this.state.phoneNumber,
            age: this.state.age,
            bio: this.state.bio,
            status: this.state.status,

        };

        this.props.UpdateProfile(UpdateProfile, this.props.history);
    }

    render() {
        //const { errors } = this.state;
        return (
            <div className="content">
                <Header title="Edit Profile" image="/images/editprofile.png" type="EditProfile" />
                <form className="messages my-3 mx-3" onSubmit={this.onSubmit}>
                    <div className="form-group row">
                        <label htmlFor="nameGroup" className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.onChange}
                            />

                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control" name="lastName"
                                value={this.state.lastName}
                                onChange={this.onChange}

                            />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <div className="custom-file">
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    className="custom-file-input bg-dark"
                                    id="customFile"
                                    //value={this.state.image}
                                    onChange={this.changeHandler}
                                />
                                <label className="custom-file-label" htmlFor="customFile">Choose Image</label>
                            </div>

                        </div>

                    </div>


                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Phone Number</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Bio</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="bio"
                                value={this.state.bio}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="category" className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="age"
                                value={this.state.age}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>



                    <div className="form-group row">
                        <label htmlFor="category" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <select
                                className="form-control"
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value="1" >Online</option>
                                <option value="0">Away</option>


                            </select>
                        </div>
                    </div>


                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-dark w-75 mb-4" style={{ bottom: 0, position: 'absolute' }}>Update Profile</button>
                    </div>




                </form>


            </div>


        )

    }

}


UpdateProfile.propTypes = {
    getProfile: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile.profile,
    errors: state.errors
});



export default connect(
    mapStateToProps,
    { UpdateProfile, getProfile }
)(EditProfile);


