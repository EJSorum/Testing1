const cipher = require("./cipher");

test("if the cipher shifts each letter", () => {
  expect(cipher(1, "abcde")).toMatch(/bcdef/);
  // This is a basic test to ensure the cipher shifts the letters over one place in the alphabet.
  expect(cipher(53, "abcde")).toMatch(/bcdef/);
  // This test ensures the cipher can handle large integers by looping back to the beginning of the alphabet.
  expect(cipher(1, "Z;Z Z!")).toMatch(/A;A A!/);
  // This test esnures the cipher keeps the letters case-sensitive and leaves spaces and punctuation unchanged.
});
