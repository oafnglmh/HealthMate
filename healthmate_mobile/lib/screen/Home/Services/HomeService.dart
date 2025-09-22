import 'dart:convert';
import 'package:http/http.dart' as http;

class HomeService {
  final http.Client client;
  final String baseUrl;
  final String baseUrlDoctor;
  HomeService({
    http.Client? client,
    this.baseUrl = "http://localhost:4000/api/user",
    this.baseUrlDoctor = "http://localhost:4000/api/doctor",
  }) : client = client ?? http.Client();

  String _formatDateTime(DateTime date, String timeSlot) {
    final startTime = timeSlot.split(' - ')[0];
    return "${date.year.toString().padLeft(4, '0')}-"
        "${date.month.toString().padLeft(2, '0')}-"
        "${date.day.toString().padLeft(2, '0')} "
        "$startTime:00";
  }

  Future<Map<String, dynamic>> addBooking({
    required int userId,
    required int doctorId,
    required DateTime date,
    required String time,
    required String symptom,
  }) async {
    final datetime = _formatDateTime(date, time);
    final url = Uri.parse("$baseUrl/add-booking");

    try {
      final response = await client.post(
        url,
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          "userId": userId,
          "doctorId": doctorId,
          "time": datetime,
          "symptom": symptom,
        }),
      );

      if (response.statusCode == 200) {
        return jsonDecode(response.body) as Map<String, dynamic>;
      } else {
        throw Exception(
          "Lỗi server [${response.statusCode}]: ${response.body}",
        );
      }
    } catch (e) {
      throw Exception("Không thể kết nối server: $e");
    }
  }

  Future<Map<String, dynamic>> getAllDoctor() async {
    final url = Uri.parse("$baseUrlDoctor/get-all-doctor");

    try {
      final response = await client.get(url);

      if (response.statusCode == 200) {
        return jsonDecode(response.body) as Map<String, dynamic>;
      } else {
        throw Exception(
          "Lỗi server [${response.statusCode}]: ${response.body}",
        );
      }
    } catch (e) {
      throw Exception("Không thể kết nối server: $e");
    }
  }

  Future<Map<String, dynamic>> getAllDoctorById(id) async {
    final url = Uri.parse("$baseUrlDoctor/get-doctor-by-id/$id");

    try {
      final response = await client.get(url);

      if (response.statusCode == 200) {
        return jsonDecode(response.body) as Map<String, dynamic>;
      } else {
        throw Exception(
          "Lỗi server [${response.statusCode}]: ${response.body}",
        );
      }
    } catch (e) {
      throw Exception("Không thể kết nối server: $e");
    }
  }
}
