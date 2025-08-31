import React, { useState } from 'react'
import api from '../lib/api'
import { saveTokens } from '../lib/auth'
import { useNavigate } from 'react-router-dom'
import { notifyError } from '../components/NotificationToast'


export default function Login(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


const handleSubmit = async (e) => {
e.preventDefault()
try{
const res = await api.post('auth/login/', { username: email, password })
saveTokens(res.data)
navigate('/dashboard')
}catch(err){ notifyError('Login failed') }
}


return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
<form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow w-96">
<h2 className="text-xl mb-4">Sign in</h2>
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" className="w-full mb-2 p-2 border rounded" />
<input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="password" className="w-full mb-4 p-2 border rounded" />
<button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Sign in</button>
</form>
</div>
)
}