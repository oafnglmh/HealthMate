import db from "../config/mysql.js";

export const createDoctor = async (doctorData) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO doctors 
      (name, email, password, image, speciality, degree, experience, about, fees, address, date) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      doctorData.name,
      doctorData.email,
      doctorData.password,
      doctorData.image,
      doctorData.speciality,
      doctorData.degree,
      doctorData.experience,
      doctorData.about,
      doctorData.fees,
      doctorData.address,
      doctorData.date,
    ];

    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
export const editDoctor = async (doctorData) => {
  return new Promise((resolve, reject) => {
    const sql = `
      UPDATE doctors
      SET name = ?,
      email = ?,
      password=?,
      image=?,
      speciality=?,
      degree=?,
      experience= ?,
      about=?,
      fees=?,
      address=?,
      date=?
      WHERE id = ${doctorData.id}

    `;
    const values = [
      doctorData.name,
      doctorData.email,
      doctorData.password,
      doctorData.image,
      doctorData.speciality,
      doctorData.degree,
      doctorData.experience,
      doctorData.about,
      doctorData.fees,
      doctorData.address,
      doctorData.date,
    ];

    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
