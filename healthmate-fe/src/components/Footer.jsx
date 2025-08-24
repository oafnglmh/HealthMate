import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold">HealthMate</h2>
          <p className="mt-3 text-blue-100">
            Giải pháp đặt lịch hẹn bác sĩ nhanh chóng, tiện lợi và đáng tin cậy cho sức khỏe của
            bạn.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:underline">
                Đặt lịch hẹn
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:underline">
                Bác sĩ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Liên hệ</h3>
          <ul className="space-y-3 text-blue-100">
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@healthmate.vn
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> 0123 456 789
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Đại học CNTT và TT Việt - Hàn
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-500 mt-8 pt-4 text-center text-blue-100 text-sm">
        © {new Date().getFullYear()} HealthMate. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
