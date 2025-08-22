import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          HealthMate
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/doctor"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`
            }
          >
            Bác sĩ
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`
            }
          >
            Giới thiệu
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`
            }
          >
            Liên hệ
          </NavLink>

          <button
            onClick={() => navigate('/login')}
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Tạo tài khoản
          </button>
        </div>
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          <NavLink
            to="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/doctor"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Bác sĩ
          </NavLink>
          <NavLink
            to="/about"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Giới thiệu
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Liên hệ
          </NavLink>
          <Link
            to="/register"
            className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Tạo tài khoản
          </Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar
