import React from 'react'
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-center px-6">
        <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-lg">
            404
        </h1>

        <p className="mt-6 text-2xl font-semibold text-gray-800">
            Oops! Page Not Found
        </p>
        <p className="mt-2 text-gray-600">
            Trang bạn đang tìm không tồn tại hoặc đã bị di chuyển.
        </p>
        <Link
            to="/"
            className="mt-8 px-6 py-3 text-white text-lg font-medium rounded-2xl shadow-md bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
            ⬅ Quay về Trang chủ
        </Link>


        <div className="absolute bottom-10 text-gray-400 text-sm">
            © {new Date().getFullYear()} HealthMate. All rights reserved.
        </div>
        </div>
    )
}

export default Page404