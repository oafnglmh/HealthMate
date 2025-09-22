import 'package:flutter/material.dart';

class SettingScreen extends StatefulWidget {
  const SettingScreen({super.key});

  @override
  State<SettingScreen> createState() => _SettingScreenState();
}

class _SettingScreenState extends State<SettingScreen> {
  bool darkMode = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const SizedBox(height: 20),
          Center(
            child: Column(
              children: [
                const CircleAvatar(
                  radius: 50,
                  backgroundImage: AssetImage("assets/img/doctor.png"),
                ),
                const SizedBox(height: 10),
                const Text(
                  "Hoàng đẹp trai",
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                const Text(
                  "dep.kho.ta@example.com",
                  style: TextStyle(color: Colors.grey),
                ),
              ],
            ),
          ),
          const SizedBox(height: 30),
          const Divider(),
          ListTile(
            leading: const Icon(Icons.person, color: Colors.teal),
            title: const Text("Thông tin cá nhân"),
            trailing: const Icon(Icons.arrow_forward_ios, size: 16),
            onTap: () {},
          ),
          ListTile(
            leading: const Icon(Icons.language, color: Colors.teal),
            title: const Text("Ngôn ngữ"),
            trailing: const Icon(Icons.arrow_forward_ios, size: 16),
            onTap: () {},
          ),
          SwitchListTile(
            value: darkMode,
            onChanged: (value) {
              setState(() {
                darkMode = value;
              });
            },
            title: const Text("Chế độ tối"),
            secondary: const Icon(Icons.dark_mode, color: Colors.teal),
          ),
          ListTile(
            leading: const Icon(Icons.help_outline, color: Colors.teal),
            title: const Text("Hỗ trợ & Trợ giúp"),
            trailing: const Icon(Icons.arrow_forward_ios, size: 16),
            onTap: () {},
          ),
          const Divider(),
          ListTile(
            leading: const Icon(Icons.logout, color: Colors.red),
            title: const Text("Đăng xuất", style: TextStyle(color: Colors.red)),
            onTap: () {},
          ),
        ],
      ),
    );
  }
}
