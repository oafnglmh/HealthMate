const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "healthmate",
  port: 3306,
});
connection.connect((err) => {
  if (err) {
    console.error("Kết nối thất bại: " + err.stack);
    return;
  }
  console.log("Kết nối thành công, ID thread: " + connection.threadId);
});

module.exports = connection;
