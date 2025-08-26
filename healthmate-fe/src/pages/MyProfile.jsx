import React, { useState } from 'react'
import { Camera } from 'lucide-react'

const MyProfile = () => {
  const [user, setUser] = useState({
    name: 'Nguyễn Văn A',
    image: 'https://i.pravatar.cc/150?img=32',
    email: 'nguyenvana@example.com',
    phone: '0901234567',
    address: '123 Nguyễn Trãi, Hà Nội',
    gender: 'Nam',
    dob: '1998-05-20',
  })

  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState(user)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }))
    }
  }

  const handleSave = () => {
    setUser(formData)
    setEditMode(false)
  }

  const handleCancel = () => {
    setFormData(user)
    setEditMode(false)
  }

  return (
    <div className="mt-20 flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center mb-6 relative">
          <div className="relative">
            <img
              src={editMode ? formData.image : user.image}
              alt="avatar"
              className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
            />
            {editMode && (
              <label className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700">
                <Camera className="w-4 h-4 text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-3 text-lg font-semibold border px-3 py-1 rounded-md text-center focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <h2 className="mt-3 text-xl font-bold text-gray-800">{user.name}</h2>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Email', name: 'email' },
            { label: 'Số điện thoại', name: 'phone' },
            { label: 'Địa chỉ', name: 'address' },
            { label: 'Giới tính', name: 'gender' },
            { label: 'Ngày sinh', name: 'dob', type: 'date' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm text-gray-600 mb-1">{field.label}</label>
              {editMode ? (
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="px-3 py-2 border rounded-lg bg-gray-50">{user[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end space-x-3">
          {editMode ? (
            <>
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyProfile
