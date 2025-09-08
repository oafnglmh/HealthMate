import 'package:flutter/material.dart';
import 'package:healthmate_mobile/common/color_extension.dart';
import 'package:healthmate_mobile/screen/Home/appointment_screen.dart';

class DoctorDetailScreen extends StatefulWidget {
  const DoctorDetailScreen({super.key});

  @override
  State<DoctorDetailScreen> createState() => _DoctorDetailScreenState();
}

class _DoctorDetailScreenState extends State<DoctorDetailScreen> {
  final Map<String, dynamic> doctorProfile = {
    "id": 1,
    "name": "BS. Lê Minh Hoàng",
    "avatar": "assets/img/doctor.png",
    "title": "Thạc sĩ, Bác sĩ Nội tổng quát",
    "speciality": "Nội khoa - Tiêu hóa",
    "experience": "10 năm kinh nghiệm",
    "education": "Tốt nghiệp Đại học Y Hà Nội, tu nghiệp tại Pháp",
    "workplace": "Bệnh viện HeathMate - Khoa Nội tổng hợp",
    "rating": 4.8,
    "reviewsCount": 124,
    "services": [
      "Khám và điều trị bệnh lý tiêu hóa",
      "Nội soi dạ dày - đại tràng",
      "Tư vấn dinh dưỡng",
    ],
    "schedule": [
      {"day": "Thứ 2", "time": "08:00 - 11:30"},
      {"day": "Thứ 4", "time": "13:30 - 17:00"},
      {"day": "Thứ 6", "time": "08:00 - 11:30"},
    ],
    "contact": {
      "phone": "0123 456 789",
      "email": "hoang.bs@hospital.vn",
      "address": "Quảng Ngãi",
    },
  };

  @override
  Widget build(BuildContext context) {
    final double rating = doctorProfile["rating"];

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.white),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: const Text(
          "Thông tin bác sĩ",
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Stack(
              alignment: Alignment.topCenter,
              children: [
                Container(
                  margin: const EdgeInsets.only(top: 60),
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(16),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black12,
                        blurRadius: 6,
                        offset: Offset(0, 3),
                      ),
                    ],
                  ),
                  child: Column(
                    children: [
                      const SizedBox(height: 50),
                      Text(
                        doctorProfile["name"],
                        style: const TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        doctorProfile["title"],
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          fontSize: 14,
                          color: Colors.black54,
                        ),
                      ),
                      const SizedBox(height: 6),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Row(
                            children: List.generate(5, (index) {
                              return Icon(
                                index < rating.floor()
                                    ? Icons.star
                                    : Icons.star_border,
                                color: Colors.orange,
                                size: 18,
                              );
                            }),
                          ),
                          const SizedBox(width: 8),
                          Text(
                            "${rating.toStringAsFixed(1)} "
                            "(${doctorProfile["reviewsCount"]} đánh giá)",
                            style: const TextStyle(fontSize: 13),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.work, size: 18, color: Colors.blue),
                          const SizedBox(width: 6),
                          Text(
                            doctorProfile["experience"],
                            style: const TextStyle(fontSize: 13),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      Text(
                        doctorProfile["workplace"],
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          fontSize: 13,
                          color: Colors.black87,
                        ),
                      ),
                    ],
                  ),
                ),
                Positioned(
                  top: 0,
                  child: CircleAvatar(
                    radius: 50,
                    backgroundImage: AssetImage(doctorProfile["avatar"]),
                  ),
                ),
              ],
            ),

            const SizedBox(height: 20),

            _buildSectionTitle("Dịch vụ"),
            ...doctorProfile["services"].map<Widget>((s) {
              return ListTile(
                leading: Icon(Icons.check_circle, color: Colors.green),
                title: Text(s),
              );
            }).toList(),

            const SizedBox(height: 20),
            _buildSectionTitle("Lịch khám"),
            ...doctorProfile["schedule"].map<Widget>((s) {
              return ListTile(
                leading: Icon(Icons.calendar_today, color: Colors.blue),
                title: Text(s["day"]),
                subtitle: Text(s["time"]),
              );
            }).toList(),

            const SizedBox(height: 20),

            _buildSectionTitle("Liên hệ"),
            ListTile(
              leading: Icon(Icons.phone, color: Colors.blue),
              title: Text(doctorProfile["contact"]["phone"]),
            ),
            ListTile(
              leading: Icon(Icons.email, color: Colors.blue),
              title: Text(doctorProfile["contact"]["email"]),
            ),
            ListTile(
              leading: Icon(Icons.location_on, color: Colors.blue),
              title: Text(doctorProfile["contact"]["address"]),
            ),

            const SizedBox(height: 30),
            ElevatedButton.icon(
              style: ElevatedButton.styleFrom(
                minimumSize: const Size(double.infinity, 50),
                backgroundColor: Colors.blue,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onPressed: () {
                context.push(AppointmentScreen(id: doctorProfile["id"]));
              },
              icon: const Icon(Icons.calendar_month),
              label: const Text("Đặt lịch hẹn", style: TextStyle(fontSize: 16)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSectionTitle(String title) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Text(
        title,
        style: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
          color: Colors.black87,
        ),
      ),
    );
  }
}
