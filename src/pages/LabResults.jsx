import React from 'react'
import LabUpload from '../components/LabUpload'


export default function LabResults(){
return (
<div className="p-6">
<h2 className="text-xl mb-4">Lab Results</h2>
<LabUpload patientId={1} />
</div>
)
}