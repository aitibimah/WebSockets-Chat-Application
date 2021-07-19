import Contact from './Contact'
import { Component } from "react";
import { getMyContacts } from "../actions/ContactActions"
import { createConversation } from "../actions/ConversationAction"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"


class ContactsList extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.getMyContacts();
    }


    onClick(id) {

        const chat = {
            "userReceiver": { "id": id },
            "userSender": {}
        }

        this.onSubmit(chat)
    }

    onSubmit(chat) {

        this.props.createConversation(chat);
        // console.log(group);
    }

    render() {
        const { mycontacts } = this.props.my_contact;
        return (

            <div id="contacts">
                <ul>

                    {mycontacts.map(contact => (

                        <Contact onClick={this.onClick} key={contact.user.id} contact={contact} />

                    ))}

                </ul>
            </div>

        )

    }

}

ContactsList.propTypes = {
    my_contact: PropTypes.object.isRequired,
    getMyContacts: PropTypes.func.isRequired,
    createConversation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

    my_contact: state.my_contact,
});


export default connect(
    mapStateToProps,
    { getMyContacts, createConversation }
)(ContactsList);

