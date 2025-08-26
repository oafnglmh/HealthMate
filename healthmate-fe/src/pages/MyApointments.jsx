import React, { useState } from 'react'
import dayjs from 'dayjs'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'BS. Nguyễn Văn A',
      specialty: 'Tim mạch',
      address: 'Phòng khám 123 Nguyễn Trãi, Hà Nội',
      time: '2025-08-27T09:00',
      paid: false,
      image: '/images/doctor.png',
    },
    {
      id: 2,
      doctor: 'BS. Trần Thị B',
      specialty: 'Nội tiết',
      address: 'Phòng khám 45 Lý Thường Kiệt, Hà Nội',
      time: '2025-08-30T14:30',
      paid: true,
      image: '/images/doctor.png',
    },
  ])

  const handlePayment = (id) => {
    setAppointments((prev) => prev.map((appt) => (appt.id === id ? { ...appt, paid: true } : appt)))
    toast.success('Thanh toán thành công!')
  }

  const handleCancel = (id, time) => {
    const now = dayjs()
    const appointmentTime = dayjs(time)
    const diffDays = appointmentTime.diff(now, 'day')

    if (diffDays < 3) {
      toast.error('Không thể hủy lịch hẹn trong vòng 3 ngày!')
      return
    }

    setAppointments((prev) => prev.filter((appt) => appt.id !== id))
    toast.success('Đã hủy lịch hẹn thành công!')
  }

  return (
    <div className="mt-20 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Lịch hẹn của tôi</h2>

        {appointments.length === 0 ? (
          <p className="text-gray-600">Bạn chưa có lịch hẹn nào.</p>
        ) : (
          <div className="space-y-6">
            {appointments.map((appt) => (
              <div
                key={appt.id}
                className="p-5 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50 flex items-center gap-4"
              >
                <img
                  src={appt.image}
                  alt={appt.doctor}
                  className="w-20 h-20 rounded-full object-cover border"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{appt.doctor}</h3>
                  <p className="text-gray-600">{appt.specialty}</p>
                  <p className="text-gray-600">{appt.address}</p>
                  <p className="text-gray-600">
                    Thời gian: {dayjs(appt.time).format('DD/MM/YYYY HH:mm')}
                  </p>
                  <div className="mt-3 flex gap-3">
                    {appt.paid ? (
                      <span className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-medium">
                        Đã tính tiền
                      </span>
                    ) : (
                      <button
                        onClick={() => handlePayment(appt.id)}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Tính tiền
                      </button>
                    )}
                    {!appt.paid && (
                      <button
                        onClick={() => handleCancel(appt.id, appt.time)}
                        className="px-4 py-2 rounded-lg border text-red-600 hover:bg-red-50"
                      >
                        Hủy bỏ
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
    </div>
  )
}

export default MyAppointments
