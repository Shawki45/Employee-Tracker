// Simple basic start up approach to Employee Tracker

const db = require("./db/connection")
// get inquirer 
const inquirer = require('inquirer')

/* prompt with -- 
  List:
  - view employees
  - view departments
  - view roles
  - add employee
  - change role
  - add role
*/
function start(){
    inquirer.prompt([
        {
            type: "list",
            name: "roles",
            message: "Which do you like to see?",
            choices: [ 'view employees', 'view departments', 'view roles', 'add employee', 'change role', 'add role']
        }
    ])
    .then((response)=>{
        console.log(response.roles)
        switch (response.roles) {
            case `view employees`:
                getAllEmployees();
                break;
            case `view roles`:
            getAllRoles();
            break;
            case 'view departments':
                getAllDepartments();
                break;
        
            default:
                break;
        }
    })
}
// This will have the initial prompt for "What do you want to do?"
start();

/** ToDo --eventually I have a Join that shows the department name */
function getAllEmployees(params) {
    db.query(`select * from employee`,(err,results)=>{
        console.table(results);
        start();
    });
}

function getAllRoles(params) {
    db.query(`select * from role`,(err,results)=>{
        console.table(results);
        start();
    })
}
function getAllDepartments(params){
    db.query('select * from department',(err,results)=>{
        console.table(results);
        start();
    })
}
