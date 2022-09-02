const Manager = require("../lib/Manager.js")

test('Can we get managers office nummber', () => {
  const officeNumber = 300
  const mock = new Manager("Brad", 2, "test@test.com", officeNumber);

  expect(mock.officeNumber).toBe(officeNumber);
});

test('Can we get the office number using getOfficeNumber()', () => {
  const officeNumber = 300;
  const mock = new Manager("Brad", 2, "test@test.com", officeNumber);

  expect(mock.getOfficeNumber()).toBe(officeNumber);
});

test('Can we get the manager role?', () => {
  const officeNumber = 300;
  const mock = new Manager("Brad", 2, "test@test.com", officeNumber);

  expect(mock.getRole()).toBe("Manager");
});