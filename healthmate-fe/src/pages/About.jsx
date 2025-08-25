import React from 'react'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-12 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Giới thiệu về Bệnh viện
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi tự hào là một trong những bệnh viện hàng đầu, luôn đặt chất lượng dịch vụ và
            sức khỏe bệnh nhân lên hàng đầu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/hospital.png"
            alt="Hospital"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sứ mệnh & Tầm nhìn</h2>
            <p className="text-gray-600 mb-4">
              Với đội ngũ bác sĩ, y tá và nhân viên chuyên môn cao, chúng tôi cam kết mang lại dịch
              vụ y tế toàn diện, tận tâm và hiện đại. Bệnh viện luôn không ngừng cải tiến để đáp ứng
              nhu cầu chăm sóc sức khỏe ngày càng cao của cộng đồng.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Đội ngũ bác sĩ chuyên khoa giỏi, tận tình.</li>
              <li>Trang thiết bị hiện đại, đạt chuẩn quốc tế.</li>
              <li>Môi trường thân thiện, an toàn và chuyên nghiệp.</li>
              <li>Cam kết đặt bệnh nhân làm trung tâm.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Giá trị cốt lõi</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: 'Tận tâm', icon: '❤️' },
              { title: 'Chuyên nghiệp', icon: '👨‍⚕️' },
              { title: 'Hiện đại', icon: '🏥' },
              { title: 'Đổi mới', icon: '🚀' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About
