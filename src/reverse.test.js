const reverse = require("./reverse");

test("if the string characters are reversed", () => {
  expect(reverse("abcde")).toMatch(/edcba/);
  expect(reverse("Register")).toMatch(/retsigeR/);
});
