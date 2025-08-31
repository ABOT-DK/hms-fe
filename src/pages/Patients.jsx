import React, { useEffect, useState } from 'react'
import api from '../lib/api'


export default function Patients(){
const [patients, setPatients] = useState([])


useEffect(()=>{
api.get('patients/').then(res=>setPatients(res.data)).catch(()=>{})
},[])


return (
<div className="p-6">
<h2 className="text-xl mb-4">Patients</h2>
<div className="grid grid-cols-3 gap-4">
{patients.map(p=> (
<div key={p.id} className="p-4 bg-white rounded shadow">
<div className="font-semibold">{p.user?.username || p.user?.email || 'Unnamed'}</div>
<div className="text-sm">ID: {p.id}</div>
</div>
))}
</div>
</div>
)
}