import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)


export default function ChartCard({ data, options, title }){
return (
<div className="p-4 bg-white rounded shadow">
<h3 className="font-semibold mb-2">{title}</h3>
<Line data={data} options={options} />
</div>
)
}