import 'package:flutter/material.dart';
import 'package:healthmate_mobile/common/color_extension.dart';

class VerifiedScreen extends StatefulWidget {
  const VerifiedScreen({super.key});

  @override
  State<VerifiedScreen> createState() => _VerifiedScreenState();
}

class _VerifiedScreenState extends State<VerifiedScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        children: [
          Container(
            width: 100,
            height: 100,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(50),
              boxShadow: const [
                BoxShadow(
                  color: Colors.black26,
                  blurRadius: 5,
                  offset: Offset(0, 3),
                ),
              ],
            ),
            child: Icon(Icons.done, size: 60, color: Color(0xff43C73D)),
          ),
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "You are Verified",
                style: TextStyle(
                  color: TColor.black,
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
