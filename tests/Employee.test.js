const Employee = require('../lib/Employee')


test('Can get the Employee name', () => {
  const mock = new Employee("Brad", 2, "test@test.com")

  expect(mock.name).toBe("Brad")
});

test('Can get the Employee name using get nameName()', () => {
  const mock = new Employee("Brad", 2, "test@test.com")

  expect(mock.getName()).toBe("Brad")
});

test('can get the id', () => {
  const mock = new Employee("Brad", 2, "test@test.com")

  expect(mock.id).toBe(2)
});

test('Can get the Employee id using getID()', () => {
  const mock = new Employee("Brad", 2, "test@test.com")

  expect(mock.getId()).toBe(2);
});

test('caan get email>?', () => {
  const mock = new Employee("Brad", 2, "test@test.com")

  expect(mock.email).toBe("test@test.com")
});

test('Can get the Employee email using get nameEmail()', () => {
  const mock = new Employee("Brad", 2, "test@test.com")

  expect(mock.getEmail()).toBe("test@test.com")
});

test('Can get the Employee Role?()', () => {
  const mock = new Employee("Brad", 2, "test@test.com")

  expect(mock.getRole()).toBe("Employee")
});