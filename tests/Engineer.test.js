const Engineer = require("../classes/Engineer.js");

test('Can we get the Engineer GitHub', () => {
  const github = "TestGitHub";
  const mock = new Engineer("Brad", 2, "test@test.com", github);

  expect(mock.github).toBe(github);
});

test('Can we get the GitHub using getGitHub()', () => {
  const github = "TestGitHub";
  const mock = new Engineer("Brad", 2, "test@test.com", github);

  expect(mock.getGitHub()).toBe(github);
});

test('Can we get the Engineer role?', () => {
  const github = "TestGitHub";
  const mock = new Engineer("Brad", 2, "test@test.com", github);

  expect(mock.getRole()).toBe("Engineer");
});