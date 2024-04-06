import axios from "./request";

export const postComment = (courseId) => {
    return axios.put(`/comment/${courseId}`)
}

export const filterComment = (courseId, values) => {
    const data = {
        comment: values.comment
    }
    return axios.post(`/comment/${courseId}/filter`, data)
}