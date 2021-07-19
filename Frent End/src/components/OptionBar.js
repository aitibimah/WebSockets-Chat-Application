import GroupButton from "./GroupButton"
import ContactButton from "./ContactButton"
import ConversationButton from "./ConversationButton"


const OptionBar = () => {
    return (
        <div id="option-bar">
            <ConversationButton />
            <GroupButton />
            <ContactButton />

        </div>
    )
}

export default OptionBar

