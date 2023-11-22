import axiosConfig from '@/config/axios.js'
import authRepository from "@/repositories/auth/authRepository";
import employeeRepository from "@/repositories/employee/employeeRepository";
export default () => {
    const request = (method, url, params) =>
        axiosConfig[method](url, params)
            .then(({ data }) => data)
            .catch(({ data }) => data)

    return {
        auth: authRepository(request),
        employee: employeeRepository(request),
    }
}
