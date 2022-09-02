class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return "Employee"
  }
}

// const test = new Employee("Brad", "10", "ligma@gmail.com", "CEO")
// console.log(test);

module.exports = Employee; 