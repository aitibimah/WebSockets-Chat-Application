import Header from "./Header"
import ContactResult from "./ContactResult"
import React, { Component } from "react";
import { getContacts } from "../actions/ContactActions"
import PropTypes from "prop-types";
import { connect } from "react-redux";


class AddContact extends Component {

    constructor() {
        super();


        this.state = {
            content: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    componentDidMount() {
        this.props.getContacts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }



    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();
        const search = this.state.content;

    }


    render() {
        //  const { contacts } = this.props.contact;
        const { errors } = this.state;

        return (
            <div className="content">
                <Header title="Add Contact" image="/images/AddContact.png" />
                <form className="AddContact my-3 mx-3" onSubmit={this.onSubmit} >
                    <div className="form-group row">
                        <label htmlFor="nameContact" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="nameContact"
                                name="content"
                                value={this.state.content}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>


                    <ul>



                        <ContactResult />
                        <ContactResult />
                        <ContactResult />
                        <ContactResult />

                    </ul>
                </form>


            </div>

        )


    }




}



AddContact.propTypes = {
    contact: PropTypes.object.isRequired,
    getContacts: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

    contact: state.contact,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { getContacts }
)(AddContact);




