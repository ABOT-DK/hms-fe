import React from 'react'
import { logout, getCurrentUser } from '../lib/auth'
import { useNavigate } from 'react-router-dom'


export default function Navbar(){
const navigate = useNavigate()
const user = getCurrentUser()
return (
<nav className="w-full bg-white p-4 shadow-sm flex justify-between items-center">
<div className="font-bold text-lg">GoatLogic Hospital</div>
<div className="flex items-center gap-4">
<div className="text-sm">{user?.username}</div>
<button onClick={() => { logout(); navigate('/login') }} className="px-3 py-1 rounded bg-red-500 text-white text-sm">Sign out</button>
</div>
</nav>
)
}