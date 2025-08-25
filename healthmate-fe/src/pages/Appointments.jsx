import React, { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'

const doctors = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    speciality: 'Pediatrics',
    avatar: '/images/doctor.png',
    about: 'Bác sĩ chuyên khoa Nhi với hơn 10 năm kinh nghiệm.',
    contact: '0905-123-456',
    price: '500.000đ / lần khám',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    speciality: 'Cardiovascular',
    avatar: '/images/doctor.png',
    about: 'Chuyên gia tim mạch, nhiều năm công tác tại BV Trung Ương.',
    contact: '0912-222-333',
    price: '700.000đ / lần khám',
  },
]

const weekdays = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']

const generateWeekDays = () => {
  const today = new Date()
  const todayIndex = today.getDay()
  let days = []
  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(today.getDate() + i)
    const dayIndex = (todayIndex + i) % 7
    days.push({
      label: weekdays[dayIndex],
      date: date.toLocaleDateString('vi-VN'),
    })
  }
  return days
}

const timeSlots = [
  '08:00 - 10:00',
  '10:00 - 12:00',
  '12:00 - 14:00',
  '14:00 - 16:00',
  '16:00 - 18:00',
  '18:00 - 20:00',
]

const Appointments = () => {
  const { docId } = useParams()
  const doctor = useMemo(() => doctors.find((d) => d.id === parseInt(docId)), [docId])

  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)

  const days = useMemo(() => generateWeekDays(), [])

  if (!doctor) return <div className="p-6">Không tìm thấy bác sĩ</div>

  const handleBooking = () => {
    console.log(
      `Đặt lịch với ${doctor.name} vào ${selectedDay.date} (${selectedDay.label}) - ${selectedSlot}`
    )
    alert(
      `Bạn đã đặt lịch với ${doctor.name} vào ${selectedDay.date} (${selectedDay.label}) - ${selectedSlot}`
    )
  }

  return (
    <div className="container mx-auto px-6 py-8 mt-20">
      <div className="flex gap-6 items-center mb-8 bg-white p-6 rounded-2xl shadow">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{doctor.name}</h1>
          <p className="text-gray-600 mb-1">Chuyên khoa: {doctor.speciality}</p>
          <p className="text-gray-600 mb-1">Liên hệ: {doctor.contact}</p>
          <p className="text-gray-600 mb-1">Giá: {doctor.price}</p>
          <p className="text-gray-500">{doctor.about}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Chọn ngày</h2>
      <div className="flex gap-4 overflow-x-auto mb-8">
        {days.map((d, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedDay(d)
              setSelectedSlot(null)
            }}
            className={`px-4 py-2 rounded-lg shadow min-w-[100px] ${
              selectedDay?.date === d.date ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            <div>{d.label}</div>
            <div className="text-sm">{d.date}</div>
          </button>
        ))}
      </div>

      {selectedDay && (
        <>
          <h2 className="text-xl font-semibold mb-4">Chọn giờ</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {timeSlots.map((slot, i) => (
              <button
                key={i}
                onClick={() => setSelectedSlot(slot)}
                className={`px-4 py-3 rounded-lg shadow ${
                  selectedSlot === slot ? 'bg-blue-600 text-white' : 'bg-gray-100'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </>
      )}

      {selectedDay && selectedSlot && (
        <div className="mt-8 p-4 bg-green-100 text-green-700 rounded-lg">
          Bạn đã chọn:{' '}
          <strong>
            {selectedDay.label} ({selectedDay.date})
          </strong>{' '}
          - <strong>{selectedSlot}</strong>
          <div className="mt-4">
            <button
              onClick={handleBooking}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
            >
              Đặt lịch hẹn
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Appointments
