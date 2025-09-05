import 'package:flutter/material.dart';
import 'package:healthmate_mobile/common/color_extension.dart';
import 'package:healthmate_mobile/common/globs.dart';
import 'package:healthmate_mobile/screen/Login/splash_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: Globs.appName,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        fontFamily: "Poppins",
        scaffoldBackgroundColor: TColor.bg,
        appBarTheme: AppBarTheme(elevation: 0, backgroundColor: TColor.primary),
        colorScheme: ColorScheme.fromSeed(seedColor: TColor.primary),
        useMaterial3: false,
      ),
      home: SplashScreen(),
    );
  }
}
