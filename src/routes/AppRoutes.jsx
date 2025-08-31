import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Patients from '../pages/Patients'
import Appointments from '../pages/Appointments'
import LabResults from '../pages/LabResults'
import Messages from '../pages/Messages'
import Analytics from '../pages/Analytics'
import Settings from '../pages/Settings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute requiredRoles={[]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route element={<ProtectedRoute requiredRoles={['Admin','Doctor','Receptionist']} />}>
        <Route path="/patients" element={<Patients />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/lab-results" element={<LabResults />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
