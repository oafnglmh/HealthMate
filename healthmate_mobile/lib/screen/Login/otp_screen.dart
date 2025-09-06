import 'package:fl_country_code_picker/fl_country_code_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_otp_text_field/flutter_otp_text_field.dart';
import 'package:healthmate_mobile/common/color_extension.dart';
import 'package:healthmate_mobile/screen/Home/main_tab_screen.dart';
import 'package:healthmate_mobile/screen/Login/verified_screen.dart';

class OtpScreen extends StatefulWidget {
  const OtpScreen({super.key});

  @override
  State<OtpScreen> createState() => _OtpScreenState();
}

class _OtpScreenState extends State<OtpScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: SizedBox(
          width: context.width,
          height: context.height,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(height: context.width * 0.3),
              Image.asset(
                "assets/img/spashLogo.png",
                width: context.width * 0.33,
              ),
              SizedBox(height: context.width * 0.05),
              Text(
                "Enter Verification Code",
                style: TextStyle(
                  color: TColor.primary,
                  fontSize: 20,
                  fontWeight: FontWeight.w600,
                ),
              ),
              SizedBox(height: 20),
              Text(
                "Nhập 6 mã",
                textAlign: TextAlign.center,
                style: TextStyle(color: TColor.primaryText, fontSize: 14),
              ),

              Padding(
                padding: const EdgeInsets.symmetric(vertical: 30),
                child: OtpTextField(
                  numberOfFields: 6,
                  borderColor: TColor.placeholder,
                  focusedBorderColor: TColor.primary,
                  obscureText: false,
                  textStyle: TextStyle(
                    color: Color(0xff43C73D),
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                  ),
                  showFieldAsBox: false,
                  borderWidth: 3.0,
                  onCodeChanged: (value) {},
                  onSubmit: (value) {},
                ),
              ),

              Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 20,
                  vertical: 15,
                ),
                child: InkWell(
                  onTap: () {
                    context.push(MainTabScreen());
                  },
                  child: Container(
                    width: double.maxFinite,
                    height: 40,
                    decoration: BoxDecoration(
                      color: TColor.primary,
                      borderRadius: BorderRadius.circular(5),
                    ),
                    alignment: Alignment.center,
                    child: Text(
                      "Continue",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 14,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 20),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text(
                      "Did Not Receive code ?",
                      style: TextStyle(color: TColor.primaryText, fontSize: 12),
                    ),
                    InkWell(
                      onTap: () {},
                      child: Text(
                        "Resend it.",
                        style: TextStyle(color: TColor.primary, fontSize: 12),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
