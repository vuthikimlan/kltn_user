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

export const getCommentByCourse = (courseId) => {
  return axios.get(`/comment/${courseId}`);
};

// export const getCommentByCourse = async (courseId) => {
//   const response = await fetch(`http://localhost:8000/comment/${courseId}`, {
//     next: { revalidate: 0 },
//   });
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await response.json();
//   return data;
// };
