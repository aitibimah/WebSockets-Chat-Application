import { GET_MY_CONTACTS, GET_CATEGORIES, GET_GROUPS } from "../actions/types";

const initialState = {
    mycontacts: [],
    categories: [],
    groups: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MY_CONTACTS:
            return {
                ...state,
                mycontacts: action.payload
            };


        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };


        case GET_GROUPS:
            return {
                ...state,
                groups: action.payload
            };

        default:
            return state;
    }
}






