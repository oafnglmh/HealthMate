import React from 'react'
import { useNavigate } from 'react-router-dom'

const specialities = [
  { id: 1, name: 'Nhi khoa', icon: '/images/baby.png', navigate: '/doctor/Pediatrics' },
  { id: 2, name: 'Tim mạch', icon: '/images/heart.png', navigate: '/doctor/Cardiovascular' },
  { id: 3, name: 'Thần kinh', icon: '/images/brain.png', navigate: '/doctor/Nerve' },
  { id: 4, name: 'Da liễu', icon: '/images/dermatology.png', navigate: '/doctor/Dermatology' },
]

const SpecialityMenu = () => {
  const navigate = useNavigate()
  return (
    <div id="speciality" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Chuyên khoa nổi bật</h2>
          <p className="text-gray-600 mt-2">
            Lựa chọn chuyên khoa phù hợp để được bác sĩ tư vấn & đặt lịch hẹn nhanh chóng
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialities.map((item) => (
            <div
              onClick={() => navigate(item.navigate)}
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition cursor-pointer"
            >
              <img src={item.icon} alt={item.name} className="w-16 h-16 mb-4 object-contain" />
              <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpecialityMenu
