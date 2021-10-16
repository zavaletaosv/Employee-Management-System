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
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE",
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
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS",
                },

                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT",
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

            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;

            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;

            case "ADD_DEPARTMENT":
                addDepartment();
                break;

            case "VIEW_ROLES":
                viewRoles();
                break;

            case "ADD_ROLE":
                addRole();
                break;

            default:
                quit();
        }
    });
}

loadPrompts();

function viewEmployees() {
    connection.query(
        `SELECT employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title, 
        department.name AS department, 
        role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
        FROM employee 
        LEFT JOIN role on employee.role_id = role.id 
        LEFT JOIN department on role.department_id = department.id 
        LEFT JOIN employee manager on manager.id = employee.manager_id`
    );
    loadPrompts();
}

function addEmployee() {
    prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },

        {
            name: "last_name",
            message: "What is the employee's last name?"
        }, 

        {
            name: "role_name",
            message: "What is the employee's role?"
        },

        {
            name: "manager_name",
            message: "What is new employee manager's name?"
        }
    ]).then(function (a) {
        const query = 'INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)'
        connection.query(query, [a.first_name, a.last_name, a.role_name, a.manager_name], (req, res) => {
            console.log('New employee added!');
        });
        loadPrompts();
    });
};

function updateEmployeeRole() {
    prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee's role would you like to update?",
            choices: [
                "Raul Zavaleta",
                "Maria Zavaleta",
                "Jr Zavaleta",
                "Francelly Zavaleta",
                "Osvaldo Zavaleta",
                "Omar Zavaleta",
                "Dylan Salcedo",
                "Lilly Perez",
            ]
        },

        {
            type: "list",
            name: "roleId",
            message: "Which role would you like to assign to the selected employee?",
            choices: [
                "Sales Manager",
                "Salesperson",
                "Finance Manager",
                "Finance Assistant",
                "Lead Engineer",
                "Software Engineer",
                "Account Manager",
                "Accountant"
            ]
        }
    ])
    .then(function (u) {
        const query = 'UPDATE employee SET role_id AS role.title = roleList WHERE id = employeeList`'
        connection.query(query, [u.employeeId, u.roleId], function (err, res) {
            console.log("Employee role updated!");
        });
        loadPrompts();
    });
}

function viewRoles() {
    connection.query(
        `SELECT role.id, 
        role.title, 
        department.name AS department, 
        role.salary 
        FROM role 
        LEFT JOIN department on role.department_id = department.id;`
    );
    loadPrompts();
}

function addRole() {
    prompt([
        {
            name: "role_name",
            message: "What is the name of the new role?"
        },

        {
            name: "role_salary",
            message: "What is the salary of the new role?"
        },

        {
            name: "departmentId",
            message: "Which department does the new role belong to?"
        }
    ]).then(function (b) {
        const query = 'INSERT INTO role(title, salary, department_id) VALUES (?,?,?)'
        connection.query(query, [b.role_name, b.role_salary, b.departmentId], function (err, res) {
            console.log("New role added!");
        });
        loadPrompts();
    });
}

function viewDepartments() {
    connection.query(
        `SELECT department.id, department.name FROM department;`
    );
    loadPrompts();
}

function addDepartment() {
    prompt([
        {
            name: "department_name",
            message: "What is the name of the new department?"
        }
    ]) .then(function (c) {
        const query = 'INSERT INTO department(name) VALUES (?)'
        connection.query(query, [c.department_name], function (err, res) {
            console.log('New department added!');
        });
        loadPrompts();
    });
}