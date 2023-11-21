import axios from 'axios';

export default ({ requiresAuth = false } = {}) => {
    const options = {};
    options.baseURL = 'http://localhost:3000';

    if (requiresAuth) {
        options.headers.Authorization = 'JWT TOKEN'
    }
    const instance = axios.create(options);

    instance.interceptors.response.use(response => {
        console.log('good boi!');
        return response;
    }, error => {
        return Promise.reject(error);
    });
    return instance;
};
