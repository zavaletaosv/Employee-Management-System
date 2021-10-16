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

function loadPrompts() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES",
        },

        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE",
        },

        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE",
        },

        {
          name: "Update Employee",
          value: "UPDATE_EMPLOYEE",
        },

        {
          name: "View All Roles",
          value: "VIEW_ROLES",
        },

        {
          name: "Add Role",
          value: "ADD_ROLE",
        },

        {
          name: "Remove Role",
          value: "REMOVE_ROLE",
        },

        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },

        {
          name: "Add Department",
          value: "ADD_DEPARTMENT",
        },

        {
          name: "Remove Department",
          value: "REMOVE_DEPARTMENT",
        },

        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;

    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;

      case "ADD_EMPLOYEE":
        addEmployee();
        break;

      case "REMOVE_EMPLOYEE":
        removeEmployee();
        break;

      case "UPDATE_EMPLOYEE":
        updateEmployee();
        break;

      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;

      case "ADD_DEPARTMENT":
        addDepartment();
        break;

      case "REMOVE_DEPARTMENT":
        removeDepartment();
        break;

      case "VIEW_ROLES":
        viewRoles();
        break;

      case "ADD_ROLE":
        addRole();
        break;

      case "REMOVE_ROLE":
        removeRole();
        break;

      default:
        quit();
    }
  });
}

loadPrompts();
