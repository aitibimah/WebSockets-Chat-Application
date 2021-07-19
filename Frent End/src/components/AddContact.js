import Header from "./Header"
import ContactResult from "./ContactResult"
import RequestResult from "./RequestResult"

import React, { Component } from "react";
import { getContacts, getContactsBySearch, getRequests, sendRequests, requestDecision } from "../actions/ContactActions"
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
        this.handelSendResult = this.handelSendResult.bind(this);
        this.handelDecisionRequest = this.handelDecisionRequest.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount() {
        this.props.getContacts();
        this.props.getRequests();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.onSubmit(e);
    }


    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    handelSendResult(id) {

        this.props.sendRequests(id)
        console.log(id)

    }

    handelDecisionRequest(id, decision) {

        this.props.requestDecision(id, decision)
        //console.log(id, decision)

    }

    async onSubmit(e) {
        e.preventDefault();
        const search = this.state.content;
        await this.sleep(1000);
        this.props.getContactsBySearch(search);
    }


    render() {

        const { user } = this.props.security;
        const { contacts } = this.props.contact;
        let contactsFiltred1 = contacts.filter(contact => { return contact.id != user.id });

        const { requests } = this.props.contact;
        const { errors } = this.state;

        return (
            <div className="content">
                <Header title="Add Contact" image="/images/AddContact.png" />
                <form className="contacts AddContact my-3 mx-3" onSubmit={this.onSubmit} >

                    <div className="card-columns">
                        {requests.map(request => (
                            <RequestResult handelDecisionRequest={this.handelDecisionRequest} key={request.id} request={request} />
                        ))}

                    </div>


                    <div className="form-group row mt-2">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                id="nameContact"
                                placeholder="Find User By Name ..."
                                name="content"
                                value={this.state.content}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>


                    <ul>

                        {

                            contactsFiltred1.map(contact => (
                                <ContactResult handelSendResult={this.handelSendResult} key={contact.id} contactv={contact} />
                            ))

                        }


                    </ul>
                </form>


            </div>

        )


    }


}



AddContact.propTypes = {
    contact: PropTypes.object.isRequired,
    getContactsBySearch: PropTypes.func.isRequired,
    getContacts: PropTypes.func.isRequired,
    sendRequests: PropTypes.func.isRequired,
    getRequests: PropTypes.func.isRequired,
    requestDecision: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

    contact: state.contact,
    security: state.security,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { getContacts, getContactsBySearch, getRequests, sendRequests, requestDecision }
)(AddContact);




