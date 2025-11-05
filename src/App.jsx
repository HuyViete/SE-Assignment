import * as React from 'react'
import { Suspense } from 'react'
// Thêm 'Suspense' vào
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// --- CÁC COMPONENT TĨNH ---
// Bạn có thể giữ lại Login vì nó là trang đầu tiên, cần tải ngay
import Login from './pages/Login'

// --- CÁC COMPONENT LƯỜI (LAZY LOAD) ---
// Sử dụng React.lazy và import() động
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))

const AdminDashboard = React.lazy(() => import('./pages/Admin/Dashboard'))
const TutorDashboard = React.lazy(() => import('./pages/Tutor/Dashboard'))
const StudentDashboard = React.lazy(() => import('./pages/Student/Dashboard'))
const MySession = React.lazy(() => import('./pages/Student/MySession'))
const FindTutor = React.lazy(() => import('./pages/Student/FindTutor'))

// Tạo một component loader đơn giản
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    Đang tải trang...
  </div>
)

export default function App() {
  return (
    <Router>
      {/* Bọc toàn bộ <Routes> bằng <Suspense> và cung cấp fallback */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Route này không lazy, sẽ tải ngay lập tức */}
          <Route path='/' element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<Login />} />

          {/* Các route này SẼ ĐƯỢC LAZY LOAD */}
          {/* Khi người dùng vào /home, React mới bắt đầu tải file JS của Home */}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/tutor/dashboard' element={<TutorDashboard />} />
          <Route path='/student/dashboard' element={<StudentDashboard />} />

          <Route path='/student/MySession' element={<MySession />} />
          <Route path='/student/FindTutor' element={<FindTutor />} />

          {/* (Lưu ý: Bạn có một route /tutor/dashboard bị lặp, tôi đã bỏ bớt 1) */}
        </Routes>
      </Suspense>
    </Router>
  )
}