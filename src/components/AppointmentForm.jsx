import React, { useState } from 'react'
import api from '../lib/api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { notifySuccess, notifyError } from './NotificationToast'


export default function AppointmentForm({ patientId, onSaved }){
const [date, setDate] = useState(new Date())
const [doctor, setDoctor] = useState('')
const [reason, setReason] = useState('')


const handleSubmit = async (e) => {
e.preventDefault()
try{
const payload = { patient: patientId, doctor, datetime: date.toISOString(), reason }
const res = await api.post('appointments/', payload)
notifySuccess('Appointment created')
onSaved?.(res.data)
}catch(err){
notifyError('Failed to create appointment')
}
}


return (
<form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 rounded shadow">
<input value={doctor} onChange={(e)=>setDoctor(e.target.value)} placeholder="Doctor ID" className="w-full p-2 border rounded" />
<DatePicker selected={date} onChange={setDate} showTimeSelect className="w-full p-2 border rounded" />
<textarea value={reason} onChange={(e)=>setReason(e.target.value)} placeholder="Reason" className="w-full p-2 border rounded" />
<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Book</button>
</form>
)
}