import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const USERS_URL = `${API_URL}/users`
const LOGIN_URL = `${USERS_URL}/login`;
const REGISTER_URL = `${USERS_URL}/register`
const UPDATE_URL = `${USERS_URL}/update`;
const UPDATE_PIC_URL = `${USERS_URL}/update/picture`;
const DELETE_PIC_URL = `${USERS_URL}/delete/picture`;
const ADD_FRIEND = `${USERS_URL}/friend`
const REMOVE_FRIEND = `${USERS_URL}/unfriend`

export const getRandomUsers = async(userID) => {
    try {
        const response = await axios.post(USERS_URL, {userID});
        return response;
    } catch (e) {
        return e.response;
    };
};

export const getUser = async (userID) => {
    try {
        const response = await axios.get(`${USERS_URL}/${userID}`);
        return response;
    } catch (e) {
        return e.response;
    };
};

export const userAuth = async (type, userObj) => {
    let url = type === "register" ? REGISTER_URL : LOGIN_URL;
    try {
        const response = await axios.post(url, { ...userObj });
        return response;
    } catch (e) {
        return e.response;
    };
};

export const userUpdate = async (userObj, authHeader) => {
    try {
        const response = await axios.put(UPDATE_URL, { ...userObj }, authHeader);
        return response;
    } catch (e) {
        return e.response;
    };
};

export const userPicUpdate = async (userID, pic, authHeader) => {
    try {
        const response = await axios.put(`${UPDATE_PIC_URL}/${userID}`, pic, authHeader);
        return response;
    } catch (e) {
        return e;
    };
};

export const userPicDelete = async (userID, picID, authHeader) => {
    try {
        const response = await axios.delete(`${DELETE_PIC_URL}/${userID}/${picID}`, authHeader);
        return response;
    } catch (e) {
        return e;
    };
};

export const addFriend = async (userID, friendID, authHeader) => {
    try {
        const response = await axios.put(`${ADD_FRIEND}/${userID}`, { friendID }, authHeader);
        return response;
    } catch (e) {
        return e.response;
    };
};

export const removeFriend = async (userID, friendID, authHeader) => {
    try {
        const response = await axios.put(`${REMOVE_FRIEND}/${userID}`, { friendID }, authHeader);
        return response;
    } catch (e) {
        return e.response;
    }
}