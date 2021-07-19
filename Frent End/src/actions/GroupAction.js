import axios from "axios";
import { GET_ERRORS, HOST_URL, GET_CATEGORIES, GET_GROUPS } from "./types";
import Toast from "../actions/Toast"



export const getCategroies = () => async dispatch => {
    const res = await axios.get(HOST_URL + "/api/category/all");
    dispatch({
        type: GET_CATEGORIES,
        payload: res.data
    });


}



export const getGroups = () => async dispatch => {

    const res = await axios.get(HOST_URL + "/api/user/mygroups");

    dispatch({
        type: GET_GROUPS,
        payload: res.data
    });


}


export const createGroup = (group, history) => async dispatch => {
    try {
        await axios.post(HOST_URL + "/api/group", group);

        Toast.fire({
            icon: 'success',
            title: 'Group created successfully'
        })

        history.push("/GroupsList");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });

    } catch (err) {

        console.log("eroooor")
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};
