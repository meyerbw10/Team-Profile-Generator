const inquirer = require("inquirer")
const fs = require("fs")

const Employee = require("./classes/Employee.js")
const Engineer = require("./classes/Engineer.js")
const Intern = require("./classes/Intern.js")
const Manager = require("./classes/Manager.js")

const employeeBucket = []

const init = () => {
  return inquirer.prompt ([
    {
      type: "input", 
      message: "Enter Manager Name",
      name: "managerName",
    },
    {
      type: "input", 
      message: "Enter Manager ID",
      name: "managerId"
    },
    {
      type: "input", 
      message: "Enter Manager Email",
      name: "managerEmail"
    },
    {
      type: "input", 
      message: "Enter Manager Office Number",
      name: "managerOfficeNumber"
    },
  ]) .then((t) => {
    console.log(t);
    const {managerName, managerId, managerEmail, managerOfficeNumber} = t
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)
    employeeBucket.push(manager)
    console.log(employeeBucket);
    anotherEmployee()
  })
}
const anotherEmployee = () => {
  inquirer.prompt([
    {
      type: "choices",
      message: "Would you like to create an engineer or intern or finish your team?",
      choices: "Finish", "E"
    }
  ])
}



init()