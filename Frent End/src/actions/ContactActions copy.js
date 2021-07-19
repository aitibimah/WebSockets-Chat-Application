import axios from "axios";
import { GET_ERRORS, GET_CONTACTS, HOST_URL } from "./types";
import Toast from "../actions/Toast"

export const UpdateProfile = (profile, history) => async dispatch => {
    try {
        const res = await axios.post(HOST_URL + "/api/profile/update", profile);

        Toast.fire({
            icon: 'success',
            title: 'Profile Updated successfully'
        })


        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {

        console.log("eroooor")
        dispatch({
            type: GET_ERRORS,
            payload: {} //err.response.data
        });
    }
};



export const getContacts = () => async dispatch => {

    const res = await axios.get(HOST_URL + "/api/user/all");
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });

};



