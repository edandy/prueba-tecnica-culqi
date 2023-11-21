import authRepository from "@/repositories/auth/authRepository";
import axios from 'axios'

export default () => {
    const token = localStorage.getItem('token')
    if(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    const request = (method, url, params) =>
        axios[method](url, params)
            .then(({ data }) => data)
            .catch(({ data }) => data)

    return {
        auth: authRepository(request),
    }
}
