import ContactProfile from './ContactProfile'
import MessageFeed from './MessageFeed'
import MessageComposer from './MessageComposer.js'
import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getConversation } from "../actions/ConversationAction"
import SockJsClient from 'react-stomp';
import jwt_decode from "jwt-decode";
import $ from 'jquery';


//import _ from 'lodash';

class ContentChat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            etat: false
        }
        this.sendMessage = this.sendMessage.bind(this);

    }


    onMessage = (message) => {
        this.setState({
            messages: [...this.state.messages, message],
            etat: true
        });


        $(".messages").animate({ scrollTop: $(document).height() + 2000000 }, "fast");

        console.log(message)
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        const {
            messageList
        } = nextProps.conversation.chatHistory;

        this.setState({
            messages: messageList
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getConversation(id);
        /*  try {
             const { messages } = this.props.conversation.chatHistory;
             this.setState({
                 messages: messages,
                 etat: false
             });
 
 
         } catch { } */
    }

    sendMessage = (message, type) => {
        const { id } = this.props.match.params;

        if (type === "messageText") {
            this.clientRef.sendMessage(`/app/ContentChat/${id}/${type}`, JSON.stringify(message));
        } else {
            this.clientRef.sendMessage(`/app/ContentChatM/${id}/${type}`, JSON.stringify(message));
        }

        $(".messages").animate({ scrollTop: $(document).height() + 2000000 }, "fast");

    };






    render() {

        try {
            const { id } = this.props.match.params;
            const { idOwner } = this.props;
            // const { chatHistory } = this.props.conversation;
            //console.log(this.state.chatHistory)
            const { lastSeen } = this.props.conversation;
            const { userReceiver } = this.props.conversation;
            const { userSender } = this.props.conversation;

            let messages;

            if (this.state.etat === false) {
                console.log("is false")
                messages = this.props.conversation.chatHistory.messageList;
            } else {
                messages = this.state.messages;
                console.log("is true")

            }
            //const { messages } = this.state;

            const { user } = this.props.security;
            const jwtToken = localStorage.jwtToken;
            let profile1 = {}
            if (user.id == userReceiver.id) {
                profile1 = userSender.profile;
            } else {
                profile1 = userReceiver.profile;
            }

            return (
                <div className="content">
                    <ContactProfile profile={profile1} />
                    <MessageFeed idOwner={idOwner} messages={messages} lastSeen={lastSeen} />
                    <MessageComposer sendMessage={this.sendMessage} />
                    <SockJsClient url='http://localhost:8080/websocket-chat/'
                        topics={[`/topic/ContentChat/${id}`]}
                        headers={{
                            Authorization: jwtToken,
                            'accept-version': "1.1,1.0",
                            'heart-beat': "10000,10000"
                        }}
                        onConnect={() => {
                            console.log("connected");
                        }}
                        onDisconnect={() => {
                            console.log("Disconnected");
                        }}

                        /*  onMessage={(msg) => {
                             let jobs = this.state.messages;
                             jobs.push(msg);
                             this.setState({ messages: jobs });
                             console.log(msg);
                         }} */

                        onMessage={this.onMessage}

                        ref={(client) => {
                            this.clientRef = client
                        }} />
                </div>
            )

        } catch (e) {
            console.log("Error")
            console.log(e)

            return null;
        }

    }


}



ContentChat.propTypes = {
    getConversation: PropTypes.func.isRequired,
    conversation: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    conversation: state.conversation.conversation,
    idOwner: state.security.user.id,
    security: state.security,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getConversation }
)(ContentChat);