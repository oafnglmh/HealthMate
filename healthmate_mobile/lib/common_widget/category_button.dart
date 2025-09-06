import 'package:flutter/material.dart';
import 'package:healthmate_mobile/common/color_extension.dart';

class CategoryButton extends StatelessWidget {
  final String title;
  final IconData icon;
  final VoidCallback onPressed;
  const CategoryButton({
    super.key,
    required this.title,
    required this.icon,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {},
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 80,
            height: 80,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(10),
              boxShadow: const [
                BoxShadow(color: Colors.black12, blurRadius: 3),
              ],
            ),
            alignment: Alignment.center,
            child: Icon(icon, size: 50, color: TColor.primary),
          ),
          SizedBox(height: 8),
          Text(
            title,
            style: TextStyle(
              color: TColor.unselect,
              fontWeight: FontWeight.w500,
              fontSize: 14,
            ),
          ),
        ],
      ),
    );
    ;
  }
}
