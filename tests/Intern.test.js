const Intern = require("../classes/Intern.js")


test('Can we get Interns school?', () => {
  const school = "OSU";
  const mock = new Intern("Brad", 2, "test@test.com", school);

  expect(mock.school).toBe(school);
});

test('Can we get the school using getSchool()', () => {
  const school = "OSU";
  const mock = new Intern("Brad", 2, "test@test.com", school);

  expect(mock.getSchool()).toBe(school);
});

test('Can we get the Interns role?', () => {
  const school = "OSU";
  const mock = new Intern("Brad", 2, "test@test.com", school);

  expect(mock.getRole()).toBe("Intern");
});