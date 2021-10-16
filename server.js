const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db",
});
connection.query = util.promisify(connection.query);

connection.connect(function (err) {
  if (err) throw err;
});

