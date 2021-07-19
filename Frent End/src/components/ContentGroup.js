import ContactProfile from './ContactProfile'
import MessageFeed from './MessageFeed'
import MessageComposer from './MessageComposer.js'
import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getConversationGroup } from "../actions/ConversationAction"
import SockJsClient from 'react-stomp';
import jwt_decode from "jwt-decode";
import $ from 'jquery';
import Header from "./Header"

//import _ from 'lodash';

class ContentGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            etat: false
        }
        this.sendMessage = this.sendMessage.bind(this);

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


    onMessage = (message) => {

        this.setState({
            messages: [...this.state.messages, message],
            etat: true
        });

        //this.state.chatHistory.messageList.push(message);
        $(".messages").animate({ scrollTop: $(document).height() + 2000000 }, "fast");

        console.log(message)
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getConversationGroup(id);
        /*  try {
             const messages = this.props.conversation.chatHistory.messageList;
             this.setState({
                 messages: messages
             });
 
         } catch { } */
    }

    sendMessage = (message, type) => {
        const { id } = this.props.match.params;


        if (type === "messageText") {
            this.clientRef.sendMessage(`/app/ContentGroup/${id}/${type}`, JSON.stringify(message));
        } else {
            this.clientRef.sendMessage(`/app/ContentGroupM/${id}/${type}`, JSON.stringify(message));
        }


        $(".messages").animate({ scrollTop: $(document).height() + 2000000 }, "fast");

    };


    render() {

        try {
            const { id } = this.props.match.params;
            const { idOwner } = this.props;

            //const { messages } = this.props.conversation.chatHistory.messageList;
            //const { user } = this.props.security;


            let messages;
            const { image } = this.props.conversation;
            const { nameGroup } = this.props.conversation;

            if (this.state.etat === false) {
                console.log("is false")
                messages = this.props.conversation.chatHistory.messageList;
            } else {
                messages = this.state.messages;
                console.log("is true")

            }
            const jwtToken = localStorage.jwtToken;

            return (
                <div className="content">
                    <Header title={nameGroup} image={`/images/groups/${image}`} type="group" />
                    <MessageFeed idOwner={idOwner} messages={messages} lastSeen="" />
                    <MessageComposer sendMessage={this.sendMessage} />
                    <SockJsClient url='http://localhost:8080/websocket-chat/'
                        topics={[`/topic/ContentGroup/${id}`]}
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



ContentGroup.propTypes = {
    getConversationGroup: PropTypes.func.isRequired,
    conversation: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    conversation: state.conversation.conversation,
    idOwner: state.security.user.id,

    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getConversationGroup }
)(ContentGroup);