import React from 'react'
import { Stethoscope, ShieldCheck, Network, FlaskConical } from 'lucide-react' // icon ví dụ

const reasons = [
  {
    id: 1,
    title: 'Chuyên gia hàng đầu',
    desc: 'HealthMate quy tụ đội ngũ bác sĩ, chuyên gia có trình độ cao, giàu kinh nghiệm và luôn tận tâm với bệnh nhân.',
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Chất lượng quốc tế',
    desc: 'Dịch vụ chăm sóc sức khỏe theo chuẩn quốc tế, đảm bảo an toàn, toàn diện và hiệu quả.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Công nghệ tiên tiến',
    desc: 'Ứng dụng công nghệ y tế hiện đại, hỗ trợ bác sĩ chẩn đoán và điều trị chính xác, nhanh chóng.',
    icon: <Network className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 4,
    title: 'Nghiên cứu & Đổi mới',
    desc: 'Liên tục cập nhật các phương pháp điều trị mới, mang đến trải nghiệm chăm sóc sức khỏe tốt nhất.',
    icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
  },
]

const WhyChooseHealthMate = () => {
  return (
    <section id="why-choose" className="py-16 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/images/doctor.png"
            alt="Bác sĩ tư vấn sức khỏe cùng HealthMate"
            className="max-w-sm md:max-w-md object-contain"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Tại sao nên chọn <span className="text-blue-600">HealthMate?</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((item) => (
              <div key={item.id} className="flex flex-col items-start">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseHealthMate
