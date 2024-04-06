import axios from "./request";

export const paymentWithVNPAY = (values) => {
    const data = {
        amount: values.amount,
        orderId: values.orderId,
        language:"vn",
    }
    return axios.post('/payment/create_payment_url', data)
}

export const creatOrder = () => {
    return axios.post('/order/create')
}

export const getOrder = async (orderId) => {
    try {
        return await axios.get(`/order/${orderId} `);
    } catch (error) {
        return console.log(error);
    }
}

export const deleteOrder = async (orderId) => {
    return await axios.delete(`/order/${orderId} `)
}

export const addCart = (courseId) => {
    return axios.post(`/user/addCart/${courseId}`)
}

export const getCart = () => {
    return axios.get(`/user/cart/getAll`)
}

export const getProfileUser = () => {
    return axios.get('/profile/user')
}

