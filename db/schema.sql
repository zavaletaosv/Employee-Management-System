-- Deletes database if it exists 
DROP DATABASE IF EXISTS employee_db;
-- Creates the new database
CREATE DATABASE employee_db;

-- Uses database created
USE employee_db;

-- Creates a ' department ' table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);