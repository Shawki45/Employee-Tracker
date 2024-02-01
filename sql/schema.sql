DROP DATABASE IF EXISTS Employee_Tracker;
CREATE DATABASE Employee_Tracker;
USE Employee_Tracker;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARVHAR(30) NOT NULL
)

CREATE TABLE Role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT ,
  foreign key (department_id)
  references department (id)
  on delete set NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT Null,
    last_name VARCHAR(30) ,
    role_id INT,
    foreign key (role_id)
    references role (id)
  on delete set NULL,
  manager_id INT,
  foreign key (manager_id)
  referwnces employee(id)
  on delete set NULL
);