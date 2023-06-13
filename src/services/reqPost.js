import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const POSTS_URL = `${API_URL}/posts`;
const POSTS_SEARCH_URL = `${POSTS_URL}/search`;
const POST_COMMENT = `${POSTS_URL}/comment`;
const POST_LIKE = `${POSTS_URL}/like`;
const DELETE_COMMENT = `${POSTS_URL}/comment/delete`;

export const getAllPosts = async (pageNumber) => {
    try {
        const response = await axios.get(`${POSTS_URL}?page=${pageNumber}`);
        return response;
    } catch (e) {
        return e.response;
    };
};
export const getOnePost = async (postId) => {
    try {
        const response = await axios.get(`${POSTS_URL}/post/${postId}`);
        return response;
    } catch (e) {
        return e.response;
    }
}
export const getSearchPosts = async (query) => {
    try {
        const response = await axios.get(`${POSTS_SEARCH_URL}?q=${query}`)
        return response;
    } catch (e) {
        return e.response;
    }
}
export const getUserPosts = async (userID) => {
    try {
        const response = await axios.get(`${POSTS_URL}/${userID}`);
        return response;
    } catch (e) {
        return e.response;
    };
};

export const postPost = async (userID, postData, token) => {
    try {
        const response = await axios.post(`${POSTS_URL}/${userID}`, postData, { headers: { authorization: token } })
        return response;
    } catch (e) {
        return e.response;
    };
};

export const commentPost = async (comment, postId, token) => {
    try {
        const response = await axios.put(`${POST_COMMENT}/${postId}`, comment, { headers: { authorization: token } });
        return response;
    } catch (e) {
        return e.response;
    };
};

export const deleteComment = async(commentId, postId, token) => {
    try {
        const response = await axios.put(`${DELETE_COMMENT}/${commentId}`, {postId}, { headers: { authorization: token } });
        return response;
    } catch (e) {
        return e.response;
    }
};

export const likePost = async (postId, userId, token) => {
    try {
        const response = await axios.put(`${POST_LIKE}/${postId}`, { userId }, { headers: { authorization: token } });
        return response;
    } catch (e) {
        return e.response;
    };
};

export const deletePost = async(postId, publicId, token) => {
    try {
        const response = await axios.delete(`${POSTS_URL}/${postId}/${publicId}`, {headers: {authorization: token}});
        return response;
    } catch (e) {
        return e.response;
    };
};