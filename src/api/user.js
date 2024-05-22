import axios from "./request";
import Cookies from "js-cookie";
const token = Cookies.get("jwt");

export const paymentWithVNPAY = (values) => {
  const data = {
    amount: values.amount,
    orderId: values.orderId,
    language: "vn",
  };
  return axios.post("/payment/create_payment_url", data);
};

export const getVpayIpn = (params) => {
  return axios.get(`/payment/vnpay_ipn?${params}`);
};

export const paymentWithMOMO = (values) => {
  const data = {
    amount: values.amount,
    orderId: values.orderId,
  };
  return axios.post("/payment/create_payment_momo", data);
};

export const creatOrder = () => {
  return axios.post("/order/create");
};

export const getOrder = async (orderId) => {
  try {
    return await axios.get(`/order/${orderId} `);
  } catch (error) {
    return console.log(error);
  }
};

export const updateOrder = async (orderId, values) => {
  const data = {
    status: values.status,
  };
  return await axios.put(`/order/${orderId}`, data);
};

export const deleteOrder = async (orderId) => {
  return await axios.delete(`/order/${orderId} `);
};

export const addCart = (courseId) => {
  return axios.post(`/user/addCart/${courseId}`);
};
export const addCartAnonymous = (courseId) => {
  return axios.post(`/user/addCart/anonymous/${courseId}`);
};

export const delCart = (courseId) => {
  return axios.delete(`/user/cart/${courseId}`);
};

export const getCart = () => {
  return axios.get(`/user/cart/getAll`);
};

export const getProfileUser = () => {
  return axios.get("/profile/user");
};

export const updateProfile = (values) => {
  return axios.put("/profile/updated-profile", values);
};

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  console.log("file", file);
  return axios.post("/file/upload", formData);
};

export const resetPasword = async (token, values) => {
  return axios.post(`/password/reset?token=${token}`, values);
};

export const forgotPasword = async (values) => {
  return axios.post(`/password/forgot`, values);
};

export const progressTracker = async (courseId, lectureId, values) => {
  const data = {
    completed: values,
  };
  return axios.put(`/user/progress/${courseId}/${lectureId}`, data);
};

export const getProgressUser = async (courseId) => {
  return axios.get(`/user/progress-user/${courseId}`);
};
