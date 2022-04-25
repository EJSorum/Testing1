const cipher = require("./cipher");

test("if the cipher shifts each character", () => {
  expect(cipher(1, "abcde")).toMatch(/bcdef/);
});
