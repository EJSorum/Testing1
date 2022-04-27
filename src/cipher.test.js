const cipher = require("./cipher");

test("if the cipher shifts each letter", () => {
  expect(cipher(1, "abcde")).toMatch(/bcdef/);
  expect(cipher(53, "abcde")).toMatch(/bcdef/);
  expect(cipher(1, "Z;Z Z!")).toMatch(/A;A A!/);
});
