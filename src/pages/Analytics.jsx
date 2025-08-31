import React from 'react'
import ChartCard from '../components/ChartCard'


export default function Analytics(){
const sample = { labels: ['Jan','Feb','Mar'], datasets: [{ label:'Patients', data:[10,20,15] }] }
return (
<div className="p-6 grid grid-cols-2 gap-4">
<ChartCard title="Patients over time" data={sample} />
</div>
)
}