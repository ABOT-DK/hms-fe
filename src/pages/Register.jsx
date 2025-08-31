import React, { useState } from 'react'
import api from '../lib/api'
import { notifySuccess, notifyError } from '../components/NotificationToast'
import { useNavigate } from 'react-router-dom'


export default function Register(){
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


const handleRegister = async (e) => {
e.preventDefault()
try{
await api.post('users/', { username, email, password })
notifySuccess('Account created — login now')
navigate('/login')
}catch(err){ notifyError('Registration failed') }
}


return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
<form onSubmit={handleRegister} className="p-8 bg-white rounded shadow w-96">
<h2 className="text-xl mb-4">Create account</h2>
<input value={username} onChange={e=>setUsername(e.target.value)} placeholder="username" className="w-full mb-2 p-2 border rounded" />
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" className="w-full mb-2 p-2 border rounded" />
<input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="password" className="w-full mb-4 p-2 border rounded" />
<button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Create</button>
</form>
</div>
)
}