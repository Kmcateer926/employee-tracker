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

  //========== Connection ID ==========================//
connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    startPrompt();
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

//============= View All Employees ==========================//
function viewAllEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
  })
}