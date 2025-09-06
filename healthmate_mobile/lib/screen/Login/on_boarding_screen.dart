import 'package:flutter/material.dart';
import 'package:healthmate_mobile/common/color_extension.dart';
import 'package:healthmate_mobile/screen/Login/login_screen.dart';

class OnBoardingScreen extends StatefulWidget {
  const OnBoardingScreen({super.key});

  @override
  State<OnBoardingScreen> createState() => _OnBoardingScreenState();
}

class _OnBoardingScreenState extends State<OnBoardingScreen> {
  PageController controller = PageController();
  int selectPage = 0;
  List pageArr = [
    {
      "img": "assets/img/board1.png",
      "title": "Find Doctors",
      "subtitle":
          "Easily search and find the best doctors \n near your location.",
    },
    {
      "img": "assets/img/board2.png",
      "title": "Book Appointments",
      "subtitle":
          "Quickly schedule your medical \n appointments with just a few taps.",
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          PageView.builder(
            controller: controller,
            itemCount: pageArr.length,
            onPageChanged: (page) {
              setState(() {
                selectPage = page;
              });
            },
            itemBuilder: (context, index) {
              var obj = pageArr[index];
              return Column(
                children: [
                  SizedBox(height: context.width * 0.4),
                  Image.asset(obj["img"], width: context.width * 0.85),
                  SizedBox(height: 20),
                  Text(
                    obj["title"],
                    style: TextStyle(
                      color: TColor.primary,
                      fontSize: 20,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 20),
                  Text(
                    obj["subtitle"],
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: TColor.black,
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              );
            },
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(height: context.width * 0.2),

              const Spacer(),
              InkWell(
                onTap: () {
                  if (selectPage < pageArr.length - 1) {
                    setState(() {
                      selectPage += 1;
                      controller.animateToPage(
                        selectPage,
                        duration: const Duration(milliseconds: 200),
                        curve: Curves.bounceInOut,
                      );
                    });
                  } else {
                    actionNextScreen();
                  }
                },
                child: Container(
                  width: 80,
                  height: 40,
                  decoration: BoxDecoration(
                    color: TColor.primary,
                    borderRadius: BorderRadius.circular(5),
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    "Next",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
              SizedBox(height: context.width * 0.3),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children:
                    pageArr.map((obj) {
                      var index = pageArr.indexOf(obj);
                      return Container(
                        width: 10,
                        height: 10,
                        margin: const EdgeInsets.symmetric(horizontal: 3),
                        decoration: BoxDecoration(
                          color:
                              index == selectPage
                                  ? TColor.primary
                                  : Colors.white,
                          borderRadius: BorderRadius.circular(5),
                          border: Border.all(color: TColor.primary, width: 2),
                        ),
                      );
                    }).toList(),
              ),
              SizedBox(height: context.width * 0.2),
            ],
          ),
        ],
      ),
    );
  }

  void actionNextScreen() {
    context.push(LoginScreen());
  }
}
