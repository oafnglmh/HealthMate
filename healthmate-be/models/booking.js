import db from "../config/mysql.js";

export const createBooking = async (bookingData) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO booking 
      (userId, doctorId, time, symptom) 
      VALUES (?, ?, ?, ?)
    `;
    const values = [
      bookingData.userId,
      bookingData.doctorId,
      bookingData.time,
      bookingData.symptom,
    ];

    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
