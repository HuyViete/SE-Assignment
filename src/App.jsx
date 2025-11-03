import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

// Admin pages
import AdminDashboard from './pages/Admin/Dashboard'

// Tutor pages
import TutorDashboard from './pages/Tutor/Dashboard'

// Student pages
import StudentDashboard from './pages/Student/Dashboard'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        
        {/* Admin routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        
        {/* Tutor routes */}
        <Route path='/tutor/dashboard' element={<TutorDashboard />} />
        
        {/* Student routes */}
        <Route path='/student/dashboard' element={<StudentDashboard />} />
      </Routes>
    </Router>
  )
}
