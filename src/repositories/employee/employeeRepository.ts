export default (request) => ({
    getEmployees: (query) => request('get', '/empleados', {params: query}),
})
