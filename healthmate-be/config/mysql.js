// config/mysql.js
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "healthmate",
});

db.connect((err) => {
  if (err) {
    console.error("Kết nối MySQL thất bại:", err.stack);
    return;
  }
  console.log("Kết nối MySQL thành công, ID:", db.threadId);
});

export default db;
