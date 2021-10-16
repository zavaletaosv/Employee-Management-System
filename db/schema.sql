-- Deletes database if it exists 
DROP DATABASE IF EXISTS employee_db;
-- Creates the new database
CREATE DATABASE employee_db;

-- Uses database created
USE employee_db;

-- Creates a ' department ' table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Creates a ' role ' table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);