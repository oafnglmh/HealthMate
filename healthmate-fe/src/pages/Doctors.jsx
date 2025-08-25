import React, { useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const allDoctors = [
  { id: 1, name: 'Nguyễn Văn A', speciality: 'Pediatrics', avatar: '/images/doctor.png' },
  { id: 2, name: 'Trần Thị B', speciality: 'Cardiovascular', avatar: '/images/doctor.png' },
]

const specialities = [
  { id: 1, name: 'Nhi khoa', key: 'Pediatrics' },
  { id: 2, name: 'Tim mạch', key: 'Cardiovascular' },
  { id: 3, name: 'Thần kinh', key: 'Nerve' },
  { id: 4, name: 'Da liễu', key: 'Dermatology' },
]

const Doctors = () => {
  const navigate = useNavigate()
  const { speciality } = useParams()
  const [visibleCount, setVisibleCount] = useState(8)

  const filteredDoctors = useMemo(() => {
    if (!speciality) return allDoctors
    return allDoctors.filter((doc) => doc.speciality === speciality)
  }, [speciality])

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8)
  }

  return (
    <div className="container mx-auto px-6 py-8 mt-20">
      <h1 className="text-2xl font-bold mb-6">Danh sách Bác sĩ</h1>

      <div className="flex gap-4 mb-8 flex-wrap">
        {specialities.map((sp) => (
          <a
            key={sp.id}
            href={`/doctor/${sp.key}`}
            className={`px-4 py-2 rounded-lg shadow ${speciality === sp.key ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          >
            {sp.name}
          </a>
        ))}
      </div>

      <div className=" cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredDoctors.slice(0, visibleCount).map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => {
              navigate(`/appointments/${doctor.id}`)
            }}
            className="bg-white rounded-2xl shadow p-4 text-center"
          >
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="font-semibold text-lg">{doctor.name}</h2>
            <p className="text-gray-500">{doctor.speciality}</p>
          </div>
        ))}
      </div>

      {visibleCount < filteredDoctors.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          >
            More
          </button>
        </div>
      )}
    </div>
  )
}

export default Doctors
