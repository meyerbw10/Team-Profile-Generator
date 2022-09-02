const Employee = require("./Employee.js")


class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }

  getSchool() {
    return this.school
  }

  getRole() {
    return "Intern"
  }
}

// const test = new Manager("Brad", 69, "ligma@gmail.com", 420)
// console.log(test);

module.exports = Intern;