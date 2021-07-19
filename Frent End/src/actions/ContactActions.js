import axios from "axios";
import { GET_ERRORS, GET_CONTACTS, HOST_URL, GET_MY_CONTACTS, GET_REQUESTS, GET_SENDREQUESTS } from "./types";
import Toast from "../actions/Toast"




export const getContactsBySearch = (search) => async dispatch => {

    const res = await axios.get(HOST_URL + `/api/user/search/${search}`);
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });

};


export const getContacts = () => async dispatch => {

    const res = await axios.get(HOST_URL + "/api/user/all");
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });

};



export const requestDecision = (id, decision) => async dispatch => {

    console.log(id, decision)

    const res = await axios.get(HOST_URL + `/api/user/RequestDecision/${id}/${decision}`);
    dispatch({
        type: GET_REQUESTS,
        payload: res.data
    });

    Toast.fire({
        icon: 'success',
        title: 'Request ' + decision + ' successfully'
    })

};








export const getRequests = () => async dispatch => {

    const res = await axios.get(HOST_URL + "/api/user/Requests/all");
    dispatch({
        type: GET_REQUESTS,
        payload: res.data
    });

};


export const getRequestsSendByMe = () => async dispatch => {

    const res = await axios.get(HOST_URL + "/api/user/Requests/sendByMe");
    dispatch({
        type: GET_SENDREQUESTS,
        payload: res.data
    });

};



export const sendRequests = (id, history) => async dispatch => {

    const res = await axios.post(HOST_URL + `/api/user/sendRequest/${id}`);

    Toast.fire({
        icon: 'success',
        title: 'Request Sent successfully'
    })

    dispatch({
        type: GET_REQUESTS,
        payload: res.data
    });


};



export const getMyContacts = () => async dispatch => {

    const res = await axios.get(HOST_URL + "/api/user/mycontacts");
    dispatch({
        type: GET_MY_CONTACTS,
        payload: res.data
    });

};



