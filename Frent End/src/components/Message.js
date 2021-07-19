import { Component } from "react"

class Message extends Component {

    render() {

        const { Message } = this.props;
        const { idOwner } = this.props;

        if (typeof (Message.text) !== 'undefined') {
            return (
                <li className={Message.idOwner == idOwner ? "replies" : "sent"}>
                    <p>
                        {Message.text}
                    </p>
                </li>

            )

        }

        return (
            <li className={Message.idOwner == idOwner ? "replies" : "sent"}>
                <p>
                    <img src={`/images/media/${Message.media}`} alt="" />


                </p>
            </li>

        )








    }

}

export default Message
/* class="replies" class="sent" */
