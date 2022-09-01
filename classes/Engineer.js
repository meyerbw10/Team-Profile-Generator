const Employee = require("./Employee.js")


class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }

  getGitHub() {
    return this.github
  }


  getRole() {
    return "Engineer"
  }

}
// const test = new Manager("Brad", 69, "ligma@gmail.com", 420)
// console.log(test);

module.exports = Engineer;