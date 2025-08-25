import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!form.fullName || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Vui lòng nhập Họ tên, Email và Nội dung.' })
      return false
    }
    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email)
    if (!emailOk) {
      setStatus({ type: 'error', message: 'Email không hợp lệ.' })
      return false
    }
    return true
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    console.log('Contact form payload:', form)
    setStatus({
      type: 'success',
      message: 'Đã gửi yêu cầu liên hệ. Chúng tôi sẽ phản hồi sớm nhất! ✨',
    })
    setForm({ fullName: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-bold">Liên hệ HealthMate</h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Có thắc mắc về lịch hẹn, dịch vụ hay hỗ trợ kỹ thuật? Hãy để lại thông tin, đội ngũ của
            chúng tôi sẽ hỗ trợ bạn.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Địa chỉ</p>
                  <p className="text-gray-600">Trường đại học CNTT và TT Việt Hàn</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Điện thoại</p>
                  <p className="text-gray-600">0384252407</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">support@healthmate.vn</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-50">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Giờ làm việc</p>
                  <p className="text-gray-600">Thứ 2 – Chủ nhật: 08:00 – 20:00</p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <p className="font-medium mb-2">Kết nối với chúng tôi</p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-1">Gửi yêu cầu</h2>
            <p className="text-gray-600 mb-6">
              Điền thông tin dưới đây, chúng tôi sẽ phản hồi trong vòng 24h.
            </p>
            {status.message && (
              <div
                className={`mb-4 rounded-xl p-3 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >
                {status.message}
              </div>
            )}
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium mb-1" htmlFor="fullName">
                  Họ và tên *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  placeholder="VD: Nguyễn Văn A"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="0905 123 456"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium mb-1" htmlFor="subject">
                  Chủ đề
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Hỗ trợ đặt lịch / Góp ý dịch vụ…"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Nội dung *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Mô tả vấn đề hoặc yêu cầu của bạn…"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2 flex items-center justify-between gap-3">
                <p className="text-sm text-gray-500">Dấu * là thông tin bắt buộc</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow"
                >
                  <Send className="w-4 h-4" /> Gửi liên hệ
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="h-72 w-full">
            <iframe
              title="HealthMate map"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.734025012026!2d108.25065207490204!3d15.975260284690657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiB2w6AgVHJ1eeG7gW4gdGjDtG5nIFZp4buHdCAtIEjDoG4sIMSQ4bqhaSBo4buNYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1756105546076!5m2!1svi!2s"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
