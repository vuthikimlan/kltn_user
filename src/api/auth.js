import axios from "./request";

export const login = ({username,password}) => {
    return axios.post('/auth/login', {username,password})
}

export const register = (values) => {
    return axios.post('/auth/register', values)
}

export const registerTeacher = (values) => {
    const data = {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
        role: 'TEACHER'
    }
    return axios.post('/auth/register', data)
}