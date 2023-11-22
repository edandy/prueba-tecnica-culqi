import axios from 'axios';
import { useAuthStore } from '@/stores/auth'
import { useValidationStore } from '@/stores/validation'
import router from "@/router";


const templateError = {
    success: false,
    message: 'Error desconocido',
}

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

instance.interceptors.request.use(async (config) => {
    const { setErrors } = useValidationStore()
    setErrors({message: ''})
    const accessToken = localStorage.getItem('token')
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
}, (error) => {
    return Promise.reject(error)
});

instance.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if (!error.response) return Promise.reject(templateError)
        const responseData = error.response.data

        const errorResponse = {
            data: { ...responseData, statusCode: error.response.status },
        }

        if(errorResponse.data.statusCode === 403) {
            const { REMOVE_TOKEN } = useAuthStore()
            REMOVE_TOKEN()
            router.push('/')
        }
        if(errorResponse.data.statusCode === 401) {
            const { setErrors } = useValidationStore()
            setErrors(errorResponse.data)
        }
        return Promise.reject(errorResponse)
    }
)

export default instance;
