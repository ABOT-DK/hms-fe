import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import api from '../lib/api'


export default function Dashboard(){
const [counts, setCounts] = useState({ patients:0, appointments:0 })


useEffect(()=>{
async function load(){
try{
const p = await api.get('patients/')
const a = await api.get('appointments/')
setCounts({ patients: p.data.length, appointments: a.data.length })
}catch(e){ /* ignore */ }
}
load()
},[])


return (
<div className="min-h-screen bg-gray-50">
<Navbar />
<div className="flex">
<Sidebar />
<main className="p-6 flex-1">
<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
<div className="grid grid-cols-3 gap-4">
<div className="p-4 bg-white rounded shadow">Patients: {counts.patients}</div>
<div className="p-4 bg-white rounded shadow">Appointments: {counts.appointments}</div>
<div className="p-4 bg-white rounded shadow">Quick stat 3</div>
</div>
</main>
</div>
</div>
)
}