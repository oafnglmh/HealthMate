import 'package:flutter/material.dart';
import 'package:healthmate_mobile/common/color_extension.dart';
import 'package:healthmate_mobile/screen/Home/doctor_screen.dart';
import 'package:healthmate_mobile/screen/Home/home_tab_screen.dart';

class MainTabScreen extends StatefulWidget {
  const MainTabScreen({super.key});

  @override
  State<MainTabScreen> createState() => _MainTabScreenState();
}

class _MainTabScreenState extends State<MainTabScreen>
    with SingleTickerProviderStateMixin {
  late TabController controller;
  int selectTab = 0;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    controller = TabController(length: 3, vsync: this);
    controller.addListener(() {
      setState(() {
        selectTab = controller.index;
      });
    });
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    controller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: false,
        leading: IconButton(
          onPressed: () {},
          icon: Icon(Icons.menu, size: 35, color: Colors.white),
        ),
        title: Text(
          "HealthMate",
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.w600,
            fontSize: 16,
          ),
        ),
        actions: [
          Container(
            alignment: Alignment.center,
            child: InkWell(
              onTap: () {},
              child: Container(
                height: 30,
                padding: const EdgeInsets.symmetric(horizontal: 8),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(15),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(
                      Icons.location_on_outlined,
                      color: TColor.primary,
                      size: 15,
                    ),
                    const SizedBox(width: 8),
                    Text(
                      "Hà Nội",
                      style: TextStyle(
                        color: TColor.primaryText,
                        fontSize: 10,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          IconButton(
            onPressed: () {},
            icon: Icon(Icons.notifications, color: Colors.white),
          ),
        ],
      ),
      body: Column(
        children: [
          Container(
            width: double.maxFinite,
            height: 15,
            decoration: BoxDecoration(
              color: TColor.primary,
              borderRadius: const BorderRadius.only(
                bottomLeft: Radius.circular(15),
                bottomRight: Radius.circular(15),
              ),
            ),
          ),
          Expanded(
            child: TabBarView(
              controller: controller,
              children: [HomeTabScreen(), Container(), Container()],
            ),
          ),
        ],
      ),
      bottomNavigationBar: Container(
        decoration: const BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(15),
            topRight: Radius.circular(15),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black26,
              blurRadius: 5,
              offset: Offset(0, -2),
            ),
          ],
        ),
        child: TabBar(
          indicatorColor: Colors.transparent,
          controller: controller,
          tabs: [
            Tab(
              icon: Icon(
                Icons.home,
                size: 32,
                color: selectTab == 0 ? TColor.primary : TColor.unselect,
              ),
            ),
            Tab(
              icon: Icon(
                Icons.chat,
                size: 32,
                color: selectTab == 1 ? TColor.primary : TColor.unselect,
              ),
            ),
            Tab(
              icon: Icon(
                Icons.settings,
                size: 32,
                color: selectTab == 2 ? TColor.primary : TColor.unselect,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
