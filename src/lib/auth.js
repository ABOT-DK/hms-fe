import { jwtDecode } from 'jwt-decode'
import { setAuthToken } from './api'


export function saveTokens({ access, refresh }){
localStorage.setItem('accessToken', access)
localStorage.setItem('refreshToken', refresh)
setAuthToken(access)
}


export function logout(){
localStorage.removeItem('accessToken')
localStorage.removeItem('refreshToken')
setAuthToken(null)
}


export function getCurrentUser(){
const token = localStorage.getItem('accessToken')
if(!token) return null
try {
const data = jwtDecode(token)
return data
} catch (e){ return null }
}