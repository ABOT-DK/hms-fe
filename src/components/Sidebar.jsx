import React from 'react'
import { NavLink } from 'react-router-dom'


const Link = ({to, children}) => (
<NavLink to={to} className={({isActive})=>`block py-2 px-3 rounded ${isActive?'bg-blue-100':''}`}>{children}</NavLink>
)


export default function Sidebar(){
return (
<aside className="w-64 bg-slate-50 p-4 min-h-[calc(100vh-64px)]">
<nav className="flex flex-col gap-2">
<Link to="/dashboard">Dashboard</Link>
<Link to="/patients">Patients</Link>
<Link to="/appointments">Appointments</Link>
<Link to="/lab-results">Lab Results</Link>
<Link to="/messages">Messages</Link>
<Link to="/analytics">Analytics</Link>
<Link to="/settings">Settings</Link>
</nav>
</aside>
)
}