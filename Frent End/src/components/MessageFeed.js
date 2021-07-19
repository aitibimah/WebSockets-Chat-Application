import React, { Component } from 'react'
import Message from './Message'

class MessageFeed extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { lastSeen } = this.props;
        const { messages } = this.props;
        const { idOwner } = this.props;


        return (
            <div className="messages">
                <ul>
                    {messages.map(msg => (

                        <Message idOwner={idOwner} key={msg.id} Message={msg} />
                    ))}

                </ul>

                <div className="mb-5 mt-3">
                    <p className="text-center text-muted">{lastSeen === "" ? "-" : "Last Seen "}{lastSeen}</p>
                </div>
            </div>

        )


    }


}

export default MessageFeed



