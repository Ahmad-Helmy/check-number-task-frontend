import axios from "axios"

const baseUrl = 'http://localhost:8800/'

function get(url,config) {
    return axios.get(baseUrl+url,config)
}
function post(url,body,config) {
    return axios.post(baseUrl+url,body,config)
}
function put(url,body,config) {
    return axios.put(baseUrl+url,body,config)
}
function del(url,config) {
    return axios.delete(baseUrl+url,config)
}

export default {
    get,
    post,
    put,
    del
}