import 'package:flutter/material.dart';

class NotificationScreen extends StatefulWidget {
  const NotificationScreen({super.key});

  @override
  State<NotificationScreen> createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  @override
  Widget build(BuildContext context) {
    final List<Map<String, String>> notifications = [
      {
        "doctorName": "BS. Nguyễn Văn A",
        "message": "Lịch hẹn khám vào ngày 25/09/2025 lúc 9:00 sáng.",
        "time": "2 giờ trước",
        "read": "1",
        "avatar": "https://cdn-icons-png.flaticon.com/512/387/387561.png",
      },
      {
        "doctorName": "BS. Trần Thị B",
        "message": "Kết quả xét nghiệm đã sẵn sàng, vui lòng kiểm tra.",
        "time": "Hôm qua",
        "read": "0",
        "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
      },
      {
        "doctorName": "BS. Phạm Văn C",
        "message": "Bạn nhớ uống thuốc theo đơn đã kê.",
        "time": "3 ngày trước",
        "read": "1",
        "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
      },
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text("Thông báo từ bác sĩ"),
        backgroundColor: Colors.teal,
      ),
      body: ListView.builder(
        itemCount: notifications.length,
        itemBuilder: (context, index) {
          final item = notifications[index];
          final bool isRead = item["read"] == "1";

          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(16),
            ),
            elevation: 4,
            child: ListTile(
              leading: CircleAvatar(
                backgroundImage: NetworkImage(item["avatar"]!),
                radius: 28,
              ),
              title: Text(
                item["doctorName"]!,
                style: TextStyle(
                  fontWeight: isRead ? FontWeight.normal : FontWeight.bold,
                  color: isRead ? Colors.black87 : Colors.teal,
                ),
              ),
              subtitle: Text(
                item["message"]!,
                style: TextStyle(
                  fontWeight: isRead ? FontWeight.normal : FontWeight.w500,
                ),
              ),
              trailing: Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    item["time"]!,
                    style: const TextStyle(color: Colors.grey, fontSize: 12),
                  ),
                  if (!isRead)
                    const Icon(Icons.circle, color: Colors.red, size: 10),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
