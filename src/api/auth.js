import axios from "./request";

export const login = ({username,password}) => {
    return axios.post('/auth/login', {username,password})
}

export const register = (values) => {
    return axios.post('/auth/register', values)
}
