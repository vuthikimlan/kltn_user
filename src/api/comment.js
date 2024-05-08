import axios from "./request";

export const postComment = (courseId, values) => {
  return axios.put(`/comment/${courseId}`, values);
};

export const filterComment = (courseId, values) => {
  const data = {
    comment: values.comment,
  };
  return axios.post(`/comment/${courseId}/filter`, data);
};
