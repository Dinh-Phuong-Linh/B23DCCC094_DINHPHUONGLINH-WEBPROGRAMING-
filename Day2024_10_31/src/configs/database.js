const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "todo_list",
});
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});
module.exports = db;
