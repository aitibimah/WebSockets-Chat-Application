import { GET_CONVERSATION, GET_CONVERSATIONS } from "../actions/types";

const initialState = {
    conversations: [],
    conversation: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONVERSATIONS:
            return {
                ...state,
                conversations: action.payload
            };

        case GET_CONVERSATION:
            return {
                ...state,
                conversation: action.payload
            };

        /* case DELETE_CONTACT:
          return {
            ...state,
            projects: state.projects.filter(
              project => project.projectIdentifier !== action.payload
            )
          }; */
        default:
            return state;
    }
}
