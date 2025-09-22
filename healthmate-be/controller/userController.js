import { createBooking } from "../models/booking.js";
const bookingDoctor = async (req, res) => {
  try {
    const { userId, doctorId, time, symptom } = req.body;
    if (!userId || !doctorId || !time) {
      return res.json({ success: false, message: "Missing detail" });
    }
    const doctorData = {
      userId,
      doctorId,
      time,
      symptom,
    };
    await createBooking(doctorData);
    res.json({ success: true, message: "Booking add success" });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};
export { bookingDoctor };
