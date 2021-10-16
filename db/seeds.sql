-- Uses database created
USE employee_db;

-- Inserts new values into ' department ' table
INSERT INTO department (name)
VALUES 
    ("Sales"),
    ("Finance"),
    ("Engineering"),
    ("Accounting");

-- Inserts new values into ' role ' table
INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Sales Manager", 125000, 1),
    ("Salesperson", 80000, 1),
    ("Finance Manager", 145000, 2),
    ("Finance Assistant", 50000, 2),
    ("Lead Engineer", 150000, 3),
    ("Software Engineer", 120000, 3),
    ("Account Manager", 160000, 4),
    ("Accountant", 125000, 4);

-- Inserts new values into ' employee ' table
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Raul", "Zavaleta", 1, NULL),
    ("Maria", "Zavaleta", 2, 1),
    ("Jr", "Zavaleta", 3, NULL),
    ("Francelly", "Zavaleta", 4, 3),
    ("Osvaldo", "Zavaleta", 5, NULL),
    ("Omar", "Zavaleta", 6, 5),
    ("Dylan", "Salcedo", 7, NULL),
    ("Lilly", "Perez", 8, 7);