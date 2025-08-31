import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import AppointmentForm from '../components/AppointmentForm'


export default function Appointments(){
const [appointments, setAppointments] = useState([])


useEffect(()=>{ api.get('appointments/').then(res=>setAppointments(res.data)).catch(()=>{}) },[])


return (
<div className="p-6 grid grid-cols-2 gap-6">
<div>
<h2 className="text-xl mb-4">Appointments</h2>
<div className="space-y-3">
{appointments.map(a => (
<div key={a.id} className="p-3 bg-white rounded shadow">
<div className="font-semibold">Patient ID: {a.patient}</div>
<div className="text-sm">Doctor: {a.doctor}</div>
<div className="text-xs">{a.datetime}</div>
</div>
))}
</div>
</div>
<div>
<h2 className="text-xl mb-4">Create Appointment</h2>
<AppointmentForm patientId={1} onSaved={(a)=> setAppointments(prev=>[a,...prev])} />
</div>
</div>
)
}