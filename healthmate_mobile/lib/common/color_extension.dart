import 'package:flutter/material.dart';

class TColor {
  static Color get primary => const Color(0xFF5976EF);
  static Color get secondary => const Color(0xFF3BB94F);

  static Color get primaryText => const Color(0xFF666666);
  static Color get primaryTextW => const Color(0xFFFFFFFF);
  static Color get secondaryText => const Color(0xFF7C7C7C);
  static Color get placeholder => const Color(0xFFA3A3A3);
  static Color get titleText => const Color(0xFF565656);
  static Color get black => const Color(0xFF000000);

  static Color get rate => const Color(0xFFDE6732);
  static Color get rateInActive => const Color(0xFFB7B7B7);
  static Color get unselect => const Color(0xFF969696);
  static Color get red => const Color(0xFFEB1C4F);
  static Color get green => const Color(0xFF15977C);

  static Color get bg => const Color(0xFFF5F5F5);
}

extension HexColor on Color {
  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }

  String toHex({bool leadingHashSign = true}) {
    return '${leadingHashSign ? '#' : ''}'
        '${alpha.toRadixString(16).padLeft(2, '0')}'
        '${red.toRadixString(16).padLeft(2, '0')}'
        '${green.toRadixString(16).padLeft(2, '0')}'
        '${blue.toRadixString(16).padLeft(2, '0')}';
  }
}

extension AppContext on BuildContext {
  Size get size => MediaQuery.sizeOf(this);
  double get width => size.width;
  double get height => size.height;

  Future push(Widget widget) async {
    return Navigator.push(
      this,
      MaterialPageRoute(builder: (context) => widget),
    );
  }

  void pop() async {
    return Navigator.pop(this);
  }
}
