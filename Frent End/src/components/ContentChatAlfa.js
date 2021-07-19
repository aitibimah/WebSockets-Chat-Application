import React, { Component } from "react";
import { getConversation } from "../actions/ConversationAction"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactProfile from "./ContactProfile"
import MessageFeed from "./MessageFeed"
import MessageComposer from "./MessageComposer"

class ContentChatAlfa extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getConversation(id);
    }

    render() {
        try {
            const { userReceiver } = this.props.conversation;

            console.log(userReceiver)
            return (
                <div className="content">
                    <span>{userReceiver.id}</span>
                    <ContactProfile user={userReceiver.profile} />
                    <MessageFeed />
                    <MessageComposer />
                </div>
            )
        }
        catch {
            console.log("Error")
            return (
                <div className="content">
                    <MessageFeed />
                    <MessageComposer />
                </div>
            )
        }


    }








}



ContentChatAlfa.propTypes = {
    getConversation: PropTypes.func.isRequired,
    conversation: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    conversation: state.conversation.conversation,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getConversation }
)(ContentChatAlfa);