import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header
      role="banner"
      className="relative text-white min-h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/backgroud.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-black/40"></div>

      <div className="relative text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Đặt lịch hẹn với bác sĩ <br /> dễ dàng & nhanh chóng
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          HealthMate giúp bạn kết nối với bác sĩ uy tín, quản lý lịch hẹn và chăm sóc sức khỏe tiện
          lợi ngay trong tầm tay.
        </p>

        <a
          href="#speciality"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Đặt lịch hẹn ngay
        </a>
      </div>
    </header>
  )
}

export default Header
