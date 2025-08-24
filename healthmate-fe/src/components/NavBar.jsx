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

          {token ? (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                <img
                  src="https://jbagy.me/wp-content/uploads/2025/03/Hinh-anh-avatar-nam-cute-9.jpg"
                  className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold"
                />

                <svg
                  className={`w-4 h-4 transition-transform ${showMenu ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                  <button
                    onClick={() => {
                      setShowMenu(false)
                      navigate('/profile')
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Trang cá nhân
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false)
                      navigate('/appointments')
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Lịch hẹn
                  </button>
                  <button
                    onClick={() => {
                      setToken(false)
                      setShowMenu(false)
                      navigate('/')
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => {
                navigate('/login')
                setIsOpen(false)
              }}
            >
              Tạo tài khoản
            </Link>
          )}
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
          {token ? (
            <div></div>
          ) : (
            <Link
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => {
                navigate('/login')
                setIsOpen(false)
              }}
            >
              Tạo tài khoản
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}

export default NavBar
