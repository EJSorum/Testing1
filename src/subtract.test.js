const subtract = require("./subtract");

test("properly subtracts two numbers", () => {
  expect(
    // This means you take the first part and do what the second part says.
    subtract(1, 2) // First part
  ).toBe(-1); // Second part
});
