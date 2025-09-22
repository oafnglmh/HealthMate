import * as DoctorModel from "../models/doctor.js";

export const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await DoctorModel.getAllDoctor();
    res.json({ success: true, data: doctors });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getDoctorByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await DoctorModel.getDoctorById(id);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }
    res.json({ success: true, data: doctor });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: e.message });
  }
};
