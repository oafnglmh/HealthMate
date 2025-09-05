import 'package:flutter/material.dart';
import 'package:healthmate_mobile/common/color_extension.dart';
import 'package:healthmate_mobile/screen/Login/on_boarding_screen.dart';

class SelectCityScreen extends StatefulWidget {
  const SelectCityScreen({super.key});

  @override
  State<SelectCityScreen> createState() => _SelectCityScreenState();
}

class _SelectCityScreenState extends State<SelectCityScreen> {
  int selectIndex = 0;
  String searchText = "";
  final List<String> countries = [
    "Việt Nam",
    "United States",
    "Japan",
    "South Korea",
    "France",
    "Germany",
    "Canada",
    "Australia",
    "Singapore",
    "Thailand",
    "Malaysia",
    "China",
    "India",
    "Brazil",
    "United Kingdom",
  ];
  @override
  Widget build(BuildContext context) {
    List<String> filterCoutries =
        countries
            .where(
              (coutry) =>
                  coutry.toLowerCase().contains(searchText.toLowerCase()),
            )
            .toList();
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Select City",
          style: TextStyle(
            color: TColor.primaryTextW,
            fontSize: 16,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
      body: Column(
        children: [
          Stack(
            alignment: Alignment.topCenter,
            children: [
              Container(
                height: 35,
                decoration: BoxDecoration(
                  color: TColor.primary,
                  borderRadius: const BorderRadius.only(
                    bottomLeft: Radius.circular(15),
                    bottomRight: Radius.circular(15),
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10, left: 10, right: 10),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(15),
                  boxShadow: const [
                    BoxShadow(
                      color: Colors.black26,
                      blurRadius: 5,
                      offset: Offset(0, 3),
                    ),
                  ],
                ),
                child: TextField(
                  onChanged: (value) {
                    setState(() {
                      searchText = value;
                    });
                  },
                  decoration: InputDecoration(
                    enabledBorder: InputBorder.none,
                    focusedBorder: InputBorder.none,
                    hintText: "Search your city",
                    hintStyle: TextStyle(
                      color: TColor.placeholder,
                      fontSize: 14,
                    ),
                    prefixIcon: Icon(Icons.search, color: TColor.placeholder),
                  ),
                ),
              ),
            ],
          ),

          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 30),
            child: Row(
              children: [
                Icon(Icons.location_on, color: TColor.black, size: 25),
                const SizedBox(width: 15),
                Text(
                  "Use Your Current Location",
                  style: TextStyle(color: TColor.black, fontSize: 14),
                ),
              ],
            ),
          ),

          Expanded(
            child: Container(
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(15),
                  topRight: Radius.circular(15),
                ),
              ),
              child: ListView.separated(
                padding: const EdgeInsets.symmetric(
                  horizontal: 20,
                  vertical: 10,
                ),
                itemBuilder: (context, index) {
                  final country = filterCoutries[index];
                  return InkWell(
                    onTap: () {
                      setState(() {
                        selectIndex = index;
                      });
                      context.push(const OnBoardingScreen());
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 10,
                        vertical: 10,
                      ),
                      alignment: Alignment.centerLeft,
                      child: Text(
                        country,
                        style: TextStyle(
                          color:
                              selectIndex == index
                                  ? TColor.black
                                  : TColor.placeholder,
                          fontSize: 16,
                          fontWeight:
                              selectIndex == index
                                  ? FontWeight.w600
                                  : FontWeight.w400,
                        ),
                      ),
                    ),
                  );
                },
                separatorBuilder:
                    (context, index) =>
                        const Divider(color: Colors.black26, height: 1),
                itemCount: filterCoutries.length,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
