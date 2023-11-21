export default (request) => ({
    postLogin: (params) => request('post', '/auth/login', params),
    getEmployees: () => request('get', '/empleados'),
})
