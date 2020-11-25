INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

-- EMPLOYEE ROLE SEEDS -------
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales person", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Account Manager", 160000, 3);

-- EMPLOYEE SEEDS -------
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Mike", "Chan", 1, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Ashely","Rodriquez", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Kevin", "Tupik", 3, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Malia", "Brown", 3, null);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Sarah", "Lourd", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tom", "Allen", 7, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Christian", "Eckenzode", 2, 1);