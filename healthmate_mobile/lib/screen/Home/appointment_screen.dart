import 'package:flutter/material.dart';
import 'package:healthmate_mobile/common/color_extension.dart';
import 'package:healthmate_mobile/screen/Home/Services/HomeService.dart';
import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

class AppointmentScreen extends StatefulWidget {
  final int? id;
  const AppointmentScreen({super.key, this.id});

  @override
  State<AppointmentScreen> createState() => _AppointmentScreenState();
}

class _AppointmentScreenState extends State<AppointmentScreen> {
  int? selectedDoctor;
  DateTime? selectedDate;
  String? selectedTime;
  final bookingService = HomeService();
  String symptom = "";
  final List<Map<String, dynamic>> doctors = [
    {
      "id": 1,
      "name": "BS. Lê Minh Hoàng",
      "specialty": "Tim mạch",
      "avatar": "assets/img/doctor.png",
    },
    {
      "id": 2,
      "name": "BS. Nguyễn Văn A",
      "specialty": "Nhi khoa",
      "avatar": "assets/img/doctor.png",
    },
    {
      "id": 3,
      "name": "BS. Trần Thị B",
      "specialty": "Da liễu",
      "avatar": "assets/img/doctor.png",
    },
  ];
  List<DateTime> getNextSevenDay() {
    DateTime now = DateTime.now();
    List<DateTime> days = [];
    for (int i = 0; i < 7; i++) {
      days.add(now.add(Duration(days: i)));
    }
    return days;
  }

  List<String> getTimeSlots() {
    List<String> slots = [];
    int startHour = 8;
    int endHour = 20;
    int hour = startHour;

    String formatTime(int h, int m) {
      final hh = h.toString().padLeft(2, '0');
      final mm = m.toString().padLeft(2, '0');
      return "$hh:$mm";
    }

    while (hour + 2 <= endHour) {
      String start = formatTime(hour, 0);
      String end = formatTime(hour + 2, 0);
      slots.add("$start - $end");

      hour += 2;

      if (hour + 2 <= endHour) {
        String start2 = formatTime(hour, 30);
        String end2 = formatTime(hour + 2, 30);
        slots.add("$start2 - $end2");
        hour += 2;
      }
    }

    return slots;
  }

  @override
  Widget build(BuildContext context) {
    bool checkDoctor = widget.id != null;
    Map<String, dynamic>? doctorData =
        checkDoctor
            ? doctors.firstWhere((d) => d["id"] == widget.id, orElse: () => {})
            : null;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: TColor.primary,
        leading: IconButton(
          onPressed: () {
            Navigator.pop(context);
          },
          icon: Icon(Icons.arrow_back),
        ),
        title: Text("Đặt lịch hẹn"),
      ),

      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(10),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 8),
              if (checkDoctor &&
                  doctorData != null &&
                  doctorData.isNotEmpty) ...[
                Row(
                  children: [
                    CircleAvatar(
                      radius: 30,
                      backgroundImage: NetworkImage(doctorData["avatar"]),
                    ),
                    const SizedBox(width: 12),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          doctorData["name"],
                          style: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(doctorData["specialty"]),
                      ],
                    ),
                  ],
                ),
                const Divider(),
                const Text(
                  "Chọn ngày:",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 12,
                  runSpacing: 12,
                  children:
                      getNextSevenDay().map((day) {
                        String label = DateFormat(
                          'EEE dd/MM',
                          'vi',
                        ).format(day);
                        final selected =
                            selectedDate != null &&
                            selectedDate!.year == day.year &&
                            selectedDate!.month == day.month &&
                            selectedDate!.day == day.day;

                        return SizedBox(
                          width: 100,
                          child: ChoiceChip(
                            label: Text(label, textAlign: TextAlign.center),
                            selected: selected,
                            onSelected: (_) {
                              setState(() => selectedDate = day);
                            },
                          ),
                        );
                      }).toList(),
                ),

                const Divider(),

                const Text(
                  "Chọn giờ:",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 8),
                Wrap(
                  spacing: 12,
                  runSpacing: 12,
                  children:
                      getTimeSlots().map((time) {
                        return SizedBox(
                          width: 110,
                          child: ChoiceChip(
                            label: Text(time, textAlign: TextAlign.center),
                            selected: selectedTime == time,
                            onSelected: (_) {
                              setState(() => selectedTime = time);
                            },
                          ),
                        );
                      }).toList(),
                ),
                SizedBox(height: 8),
                const Text(
                  "Triệu chứng:",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 8),
                TextField(
                  onChanged: (value) {
                    setState(() {
                      symptom = value;
                    });
                  },
                  maxLines: 3,
                  decoration: InputDecoration(
                    hintText: "Nhập triệu chứng của bạn...",
                    filled: true,
                    fillColor: Colors.grey.shade100,
                    contentPadding: const EdgeInsets.symmetric(
                      vertical: 12,
                      horizontal: 16,
                    ),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide.none,
                    ),
                  ),
                ),

                SizedBox(height: 8),
                if (selectedTime != null &&
                    selectedDate != null &&
                    symptom != "")
                  Container(
                    padding: const EdgeInsets.all(16),
                    width: double.infinity,
                    decoration: BoxDecoration(
                      color: Colors.lightGreen.shade100,
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: Colors.green.shade300),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          "Xác nhận lịch hẹn",
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                            color: Colors.black87,
                          ),
                        ),
                        const SizedBox(height: 8),

                        Text(
                          "Ngày: ${DateFormat('EEEE, dd/MM/yyyy', 'vi').format(selectedDate!)}",
                          style: const TextStyle(fontSize: 14),
                        ),

                        Text(
                          "Giờ: $selectedTime",
                          style: const TextStyle(fontSize: 14),
                        ),

                        Text(
                          "Bác sĩ: ${doctors.firstWhere((d) => d['id'] == widget.id)['name']}",
                          style: const TextStyle(fontSize: 14),
                        ),
                        Text(
                          "Triệu chứng: $symptom",
                          style: const TextStyle(fontSize: 14),
                        ),
                        Text(
                          "Địa chỉ: Đại học công nghệ thông tin và truyền thông Việt Hàn",
                          style: const TextStyle(fontSize: 14),
                        ),

                        SizedBox(height: 8),
                        ElevatedButton.icon(
                          style: ElevatedButton.styleFrom(
                            minimumSize: const Size(100, 48),
                            backgroundColor: Colors.blue,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(12),
                            ),
                          ),

                          onPressed: () async {
                            try {
                              final result = await bookingService.addBooking(
                                userId: 1,
                                doctorId: widget.id!,
                                date: selectedDate!,
                                time: selectedTime!,
                                symptom: symptom,
                              );
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                  content: Text(
                                    "Đặt lịch thành công: ${result['message']}",
                                  ),
                                ),
                              );
                            } catch (e) {
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                  content: Text("Đặt lịch thất bại: $e"),
                                ),
                              );
                            }
                          },
                          icon: const Icon(Icons.calendar_month),
                          label: const Text(
                            "Đặt lịch khám",
                            style: TextStyle(fontSize: 16),
                          ),
                        ),
                      ],
                    ),
                  ),
              ],
              if (!checkDoctor) Text("Vui lòng chọn bác sĩ trước khi đặt lịch"),
            ],
          ),
        ),
      ),
    );
  }
}
