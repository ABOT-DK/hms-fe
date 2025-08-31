import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getCurrentUser } from '../lib/auth'


export default function ProtectedRoute({ requiredRoles = [] }){
const user = getCurrentUser()
if(!user) return <Navigate to="/login" replace />
if(requiredRoles.length && !requiredRoles.includes(user.role)){
return <Navigate to="/dashboard" replace />
}
return <Outlet />
}