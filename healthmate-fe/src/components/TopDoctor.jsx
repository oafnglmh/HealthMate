import React from 'react'
import { useNavigate } from 'react-router-dom'

const doctors = [
  {
    id: 1,
    name: 'BS. Nguyễn Văn A',
    speciality: 'Nhi khoa',
    image: '/images/doctor.png',
  },
  {
    id: 2,
    name: 'BS. Trần Thị B',
    speciality: 'Tim mạch',
    image: '/images/doctor.png',
  },
  {
    id: 3,
    name: 'BS. Lê Văn C',
    speciality: 'Thần kinh',
    image: '/images/doctor.png',
  },
  {
    id: 4,
    name: 'BS. Phạm Thị D',
    speciality: 'Da liễu',
    image: '/images/doctor.png',
  },
]

const TopDoctor = () => {
  const navigate = useNavigate()
  return (
    <section id="top-doctor" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Bác sĩ hàng đầu</h2>
          <p className="text-gray-600 mt-2">
            Đội ngũ bác sĩ giàu kinh nghiệm và chuyên môn cao của HealthMate
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div
              onClick={() => navigate(`/doctor/${doctor.id}`)}
              key={doctor.id}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-blue-600 text-sm mt-1">{doctor.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopDoctor
