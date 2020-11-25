//======== Dependencies===================//
const inquirer = require("inquirer")
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "disaronno66RUM!",
    database: "employee_trackerDB"
  });

  //================== Initial Prompt =======================//
function startPrompt() {
    inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do?",
    name: "choice",
    choices: [
              "View All Departments?", 
              "View All Roles?",
              "View all Emplyees?", 
              "Update Employee managers",
              "Add Employee?",
              "Add Role?",
              "Add Department?",
              "Delete Employee?",
              "Delete Role?",
              "Delete Department?"
            ]
    }
]).then(function(val) {
        switch (val.choice) {
            case "View All Departments?":
              viewAllDepartments();
            break;
    
          case "View All Roles?":
              viewAllRoles();
            break;
          case "View all Emplyees?":
              viewAllEmployees();
            break;
          
          case "Add Employee?":
                addEmployee();
              break;

          case "Update Employee":
                updateEmployee();
              break;
      
            case "Add Role?":
                addRole();
              break;
      
            case "Add Department?":
                addDepartment();
              break;
    
            }
    })
}