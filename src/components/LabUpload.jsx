import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import api from '../lib/api'
import { notifySuccess, notifyError } from './NotificationToast'


export default function LabUpload({ patientId }){
const onDrop = useCallback(async (files) => {
const form = new FormData()
form.append('patient', patientId)
form.append('file', files[0])
try{
await api.post('lab-results/', form, { headers: { 'Content-Type': 'multipart/form-data' }})
notifySuccess('Lab file uploaded')
}catch(err){ notifyError('Upload failed') }
}, [patientId])


const {getRootProps, getInputProps} = useDropzone({ onDrop, multiple: false })


return (
<div {...getRootProps()} className="p-6 border-2 border-dashed border-slate-300 rounded text-center bg-white">
<input {...getInputProps()} />
<p>Drop lab file here, or click to upload</p>
</div>
)
}