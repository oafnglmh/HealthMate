import 'package:flutter/material.dart';
import 'package:healthmate_mobile/common/color_extension.dart';
import 'package:healthmate_mobile/common_widget/category_button.dart';
import 'package:healthmate_mobile/screen/Home/Services/HomeService.dart';
import 'package:healthmate_mobile/screen/Home/doctor_screen.dart';

class HomeTabScreen extends StatefulWidget {
  const HomeTabScreen({super.key});

  @override
  State<HomeTabScreen> createState() => _HomeTabScreenState();
}

class _HomeTabScreenState extends State<HomeTabScreen> {
  final service = HomeService();
  List categoryArr = [
    {"title": "Khoa Khám bệnh", "icon": Icons.local_hospital},
    {"title": "Khoa Nội", "icon": Icons.monitor_heart},
    {"title": "Khoa Ngoại", "icon": Icons.healing},
    {"title": "Khoa Sản", "icon": Icons.baby_changing_station},
    {"title": "Khoa Nhi", "icon": Icons.child_care},
    {"title": "Khoa Cấp cứu", "icon": Icons.emergency},
    {"title": "Khoa Xét nghiệm", "icon": Icons.science},
    {"title": "Khoa Chẩn đoán hình ảnh", "icon": Icons.image_search},
    {"title": "Khoa Dược", "icon": Icons.medication},
    {"title": "Khoa Hồi sức - ICU", "icon": Icons.personal_injury},
  ];
  List doctors = [];
  List imgBanner = [
    {"img": "assets/img/banner.png"},
    {"img": "assets/img/banner.png"},
    {"img": "assets/img/banner.png"},
  ];
  @override
  void initState() {
    super.initState();
    _loadDoctors();
  }

  Future<void> _loadDoctors() async {
    try {
      final response = await service.getAllDoctor();
      setState(() {
        doctors = response["data"];
      });
    } catch (e) {
      print("Lỗi load doctor: $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              height: 150,
              child: ListView.separated(
                padding: EdgeInsets.symmetric(horizontal: 20, vertical: 15),
                scrollDirection: Axis.horizontal,
                itemBuilder: (context, index) {
                  var obj = categoryArr[index];
                  return CategoryButton(
                    title: obj["title"],
                    icon: obj["icon"],
                    onPressed: () {},
                  );
                },
                separatorBuilder: (context, index) => const SizedBox(width: 25),
                itemCount: categoryArr.length,
              ),
            ),
            Container(
              height: context.width * 0.5,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                padding: EdgeInsets.symmetric(vertical: 15, horizontal: 20),
                itemBuilder: (context, index) {
                  var obj = imgBanner[index];
                  return Container(
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(10),
                      boxShadow: const [
                        BoxShadow(color: Colors.black12, blurRadius: 3),
                      ],
                    ),
                    child: Image.asset(
                      obj["img"],
                      width: context.width * 0.85,
                      height: context.width * 0.425,
                      fit: BoxFit.cover,
                    ),
                  );
                },
                separatorBuilder: (context, index) => SizedBox(width: 15),
                itemCount: imgBanner.length,
              ),
            ),
            Container(
              height: 230,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                padding: EdgeInsets.symmetric(vertical: 15, horizontal: 20),
                itemBuilder: (context, index) {
                  var obj = doctors[index];
                  return DoctorCellScreen(
                    id: obj["id"],
                    name: obj["name"],
                    img: obj["image"] ?? "assets/img/doctor.png",
                    onPressed: () {},
                  );
                },
                separatorBuilder: (context, index) => SizedBox(width: 15),
                itemCount: doctors.length,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
