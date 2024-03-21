import axios from "./request";

export const paymentWithVNPAY = (values) => {
    return axios.post('/payment/create_payment_url', values)
}