import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

import AdminDashboard from './pages/Admin/Dashboard'
import TutorDashboard from './pages/Tutor/Dashboard'
import StudentDashboard from './pages/Student/Dashboard'
import MySession from './pages/Student/MySession'
import FindTutor from './pages/Student/FindTutor'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/tutor/dashboard' element={<TutorDashboard />} />
        <Route path='/student/dashboard' element={<StudentDashboard />} />

        <Route path='/student/MySession' element={<MySession />} />
        <Route path='/student/FindTutor' element={<FindTutor />} />
      </Routes>
    </Router>
  )
}
