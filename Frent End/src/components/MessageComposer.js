import { Component } from "react"
import $ from 'jquery';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MessageComposer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: {
                text: '',
                media: '',
                idSender: ''
            },
            type: ''
        }

        this.onChange = this.onChange.bind(this);
        this.selectMedia = this.selectMedia.bind(this);
        this.onClick = this.onClick.bind(this);

        //this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        $(".messages").animate({ scrollTop: $(document).height() + 2000000 }, "fast");
    }

    onChange(e) {

        const { idOwner } = this.props;
        this.setState({
            message: {
                text: e.target.value,
                idOwner: idOwner
            },
            type: 'messageText'
        });

    }



    selectMedia(e) {
        e.preventDefault();
        const { idOwner } = this.props;
        this.setState({
            message: {
                media: e.target.files.item(0).name,
                idOwner: idOwner
            },
            type: 'messageMedia'
        });


    }

    onClick(e) {
        e.preventDefault();
        this.props.sendMessage(this.state.message, this.state.type)
        document.getElementById("text").value = "";
        $(".messages").animate({ scrollTop: $(document).height() + 2000000 }, "fast");

    }

    /* sendMessage() {

        const messageText = {
            text: "this.state.text"
        };
        this.props.sendMessage(messageText);
    } */

    render() {
        return (
            <div className="message-input">
                <div className="wrap">
                    <input
                        id="text"
                        type="text"
                        name="text"
                        placeholder="Write your message..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />

                    <label className="" for="multfile">
                        <input
                            id="multfile"
                            type="file"
                            name="media"
                            multiple="multiple"
                            style={{ display: 'none' }}
                            onChange={this.selectMedia} />
                        <span id="multfile-label" className="fa fa-paperclip attachment" aria-hidden="true" ></span>
                    </label>

                    <button
                        className="submit"
                        onClick={this.onClick}
                    >
                        <i className="fa fa-paper-plane" aria-hidden="true" />
                    </button>

                </div>
            </div>
        )

    }

}


const mapStateToProps = state => ({
    idOwner: state.security.user.id
});


export default connect(
    mapStateToProps,
    {}
)(MessageComposer);
