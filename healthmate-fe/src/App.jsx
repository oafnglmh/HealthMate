import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import MyAppointments from './pages/MyApointments'
import MyProfile from './pages/MyProfile'
import Page404 from './pages/Page404'
import Appointments from './pages/Appointments'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className="mx-4">
      <NavBar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctors />} />
        <Route path="/doctor/:speciality" element={<Doctors />} />
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />

        {/* User routes */}
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/appointments/:docId" element={<Appointments />} />
        <Route path="/profile" element={<MyProfile />} />

        {/* 404 fallback */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
