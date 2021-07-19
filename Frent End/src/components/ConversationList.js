import Conversation from './Conversation'
import React, { Component } from "react";
import { getConversations } from "../actions/ConversationAction"
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ConversationList extends Component {

    componentDidMount() {
        this.props.getConversations();
    }

    render() {

        const { conversations } = this.props.conversation;
        //console.log(conversations)
        return (
            <div id="contacts">
                <ul>

                    {conversations.map(conversation => (
                        <Conversation key={conversation.id} conversation={conversation} />
                    ))}

                </ul>
            </div>

        )


    }

}



ConversationList.propTypes = {
    conversation: PropTypes.object.isRequired,
    getConversations: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({

    conversation: state.conversation,

});


export default connect(
    mapStateToProps,
    { getConversations }
)(ConversationList);



