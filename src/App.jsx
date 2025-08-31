import React, { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { setAuthToken } from './lib/api'


const token = localStorage.getItem('accessToken')
if (token) setAuthToken(token)


export default function App(){
return (
<>
<AppRoutes />
<ToastContainer position="top-right" />
</>
)
}