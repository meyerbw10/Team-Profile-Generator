const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require("./utils/generateHtml")

//-----------------------------------------------------//

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

//-----------------------------------------------------//

const employeeBucket = []

//-----------------------------------------------------//

const init = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter Manager's Name.",
      name: "managerName",
    },
    {
      type: "input",
      message: "Enter Manager's ID.",
      name: "managerId"
    },
    {
      type: "input",
      message: "Enter Manager's Email.",
      name: "managerEmail"
    },
    {
      type: "input",
      message: "Enter Manager's Office Number.",
      name: "officeNumber"
    },
  ]).then((t) => {
    console.log(t);
    const { managerName, managerId, managerEmail, officeNumber } = t
    const manager = new Manager(managerName, managerId, managerEmail, officeNumber)
    employeeBucket.push(manager)
    anotherEmployee()
  })
}

//-----------------------------------------------------//

const anotherEmployee = () => {

  return inquirer.prompt([
    {
      type: "list",
      message: "Add another Employee?",
      choices: [
        "Engineer",
        "Intern",
        "Finish"
      ],
      name: "employeeAdd",

    }
  ]).then((newCase) => {
    console.log(employeeBucket)
    switch (newCase.employeeAdd) {
      case "Engineer":
        addEngineer()
        break;
      case "Intern":
        addIntern()
        break;
      case "Finish":
        pushEmployee()
    }
  })
}

//-----------------------------------------------------//

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter Engineer Name.",
      name: "engineerName",
    },
    {
      type: "input",
      message: "Enter Engineer ID.",
      name: "engineerId"
    },
    {
      type: "input",
      message: "Enter Manager Email.",
      name: "engineerEmail"
    },
    {
      type: "input",
      message: "Enter GitHub Username.",
      name: "engineerGithub"
    }
  ]).then((t) => {
    console.log(t);
    const { engineerName, engineerId, engineerEmail, engineerGithub } = t
    const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub)
    employeeBucket.push(engineer)

    anotherEmployee()

  })
}

//-----------------------------------------------------//

const addIntern = () => {
  return inquirer.prompt([
      {
          type: "input",
          message: "Enter Intern's Name.",
          name: "internName"
          
      },
      {
          type: "input",
          message: "Enter intern's Employee ID.",
          name: "internId"
          
      },
      {
          type: "input",
          message: "Enter Intern's Email.",
          name: "internEmail"
          
      },
      {
          type: "input",
          message: "Enter Intern's School.",
          name: "internSchool"
          
      },
  ]).then((internData) => {
      const { internName, internId, internEmail, internSchool } = internData
      const intern = new Intern(internName, internId, internEmail, internSchool)
      employeeBucket.push(intern)

      anotherEmployee(intern)
      
  })
}


//-----------------------------------------------------//

const pushEmployee = () => { 
  fs.writeFileSync("./dist/index.html", generateHtml(employeeBucket),
   (err) => err ? console.log("You messed up somewhere.") : console.log("Creation Successful!"))
  
}


init()