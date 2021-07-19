
import axios from "axios";
import { GET_CONVERSATIONS, GET_CONVERSATION, HOST_URL } from "./types";


export const getConversations = () => async dispatch => {

    const res = await axios.get(HOST_URL + "/api/chat_individual/all");
    dispatch({
        type: GET_CONVERSATIONS,
        payload: res.data
    });

};


export const getConversation = (id) => async dispatch => {

    try {
        //console.log("id from action" + id)
        const res = await axios.get(HOST_URL + `/api/chat_individual/${id}`);
        dispatch({
            type: GET_CONVERSATION,
            payload: res.data
        });

    } catch {

        console.log("Error getting Conversation from data base.")
    }

};


export const getConversationGroup = (id) => async dispatch => {
    try {
        //console.log("id from action" + id)
        const res = await axios.get(HOST_URL + `/api/group/${id}`);
        dispatch({
            type: GET_CONVERSATION,
            payload: res.data
        });

    } catch {
        console.log("Error getting ConversationGroup from data base.")
    }

};

export const createConversation = (chat) => async dispatch => {
    try {
        //console.log("id from action" + id)
        const res = await axios.post(HOST_URL + "/api/chat_individual/", chat);
        console.log("res" + res.data.id)
        dispatch({
            type: GET_CONVERSATION,
            payload: res.data
        });

        location.href = `/ContentChat/${res.data.id}`;
        //history.push(`/ContentChat/${res.data.id}`)

    } catch (e) {

        console.log("Error posting Conversation into data base.")
        console.log(e)
    }

};




