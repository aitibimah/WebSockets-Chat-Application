import { GET_CONTACT, GET_CONTACTS, GET_REQUESTS, GET_SENDREQUESTS } from "../actions/types";

const initialState = {
    contacts: [],
    requests: [],
    sendRequests: [],
    contact: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };

        case GET_REQUESTS:
            return {
                ...state,
                requests: action.payload
            };


        case GET_SENDREQUESTS:
            return {
                ...state,
                sendRequests: action.payload
            };


        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
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
