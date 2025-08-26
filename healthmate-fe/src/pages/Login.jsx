import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Đăng Nhập')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandle = async (e) => {
    e.preventDefault()
    if (state === 'Đăng Nhập') {
      console.log('Login:', { email, password })
    } else {
      console.log('Register:', { name, email, password })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-blue-600">HealthMate</h1>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">{state}</h2>

        <form onSubmit={onSubmitHandle} className="space-y-4">
          {state === 'Đăng Ký' && (
            <div>
              <label className="block text-gray-600 text-sm mb-1">Họ và tên</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Nhập họ tên"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Nhập email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            {state}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          {state === 'Đăng Nhập' ? (
            <>
              Chưa có tài khoản?{' '}
              <span
                className="text-blue-600 cursor-pointer font-medium"
                onClick={() => setState('Đăng Ký')}
              >
                Đăng Ký
              </span>
            </>
          ) : (
            <>
              Đã có tài khoản?{' '}
              <span
                className="text-blue-600 cursor-pointer font-medium"
                onClick={() => setState('Đăng Nhập')}
              >
                Đăng Nhập
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default Login
