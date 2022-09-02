const inquirer = require("inquirer")
const fs = require("fs")

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const employeeBucket = []

const init = () => {
  return inquirer.prompt([
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
  ]).then((t) => {
    console.log(t);
    const { managerName, managerId, managerEmail, managerOfficeNumber } = t
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)
    employeeBucket.push(manager)
    console.log(employeeBucket);
    anotherEmployee()
  })
}
const anotherEmployee = () => {

  return inquirer.prompt([
    {
      type: "list",
      message: "Would you like to add an employee?",
      choices: [
        "Engineer",
        "Intern",
        "No, I'm finished"
      ],
      name: "employeeAdd",

    }
  ]).then((newCase) => {
    // console.log(employeeBucket)
    switch (newCase.employeeAdd) {
      case "Engineer":
        addEngineer()
        break;
      case "Intern":
        addIntern()
        break;
      case "No, I'm finished":
        pushNewEmployee()
    }
  })
}

addEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter Engineer Name",
      name: "engineerName",
    },
    {
      type: "input",
      message: "Enter Engineer ID",
      name: "managerId"
    },
    {
      type: "input",
      message: "Enter Manager Email",
      name: "managerEmail"
    },
    {
      type: "input",
      message: "Enter GitHub Username",
      name: "EngineerUserName"
    }
  ]).then((t) => {
    console.log(t);
    const { managerName, managerId, managerEmail, managerOfficeNumber } = t
    const Engineer = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)
    employeeBucket.push(manager)
    console.log(employeeBucket);
    anotherEmployee()

  })
}

addIntern()
//write to file function


init()