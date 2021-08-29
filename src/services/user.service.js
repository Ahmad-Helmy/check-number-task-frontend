import http from './http.service'
import jwt from 'jwt-decode'


const setToken = (token)=> localStorage.setItem('token',token)
const getToken = ()=> localStorage.getItem('token')
const deleteToken = ()=> localStorage.removeItem('token')

export function login(user) {
    return http.post('user/login',user)
            .then((res)=>{
                setToken(res.data.token)
                window.location.href = '/'
                return res.data.user
            })
}
        
export function signup(user) {
    return http.post('user/signup',user)
        .then((res)=>{
            setToken(res.data.token)
            window.location.href = '/'
            return res.data.user
        })
}

export function logout(){
    deleteToken()
    window.location.href = '/'
}

export function isLoggedIn() {
    return !! getToken()
}

export function user() {
    return jwt(getToken())
}