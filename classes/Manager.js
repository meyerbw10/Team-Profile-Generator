const Employee = require("./Employee.js")


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager")
    this.officeNumber = officeNumber
  }
}

// const test = new Manager("Brad", 69, "ligma@gmail.com", 420)
// console.log(test);

module.exports = Manager;