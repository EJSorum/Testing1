const capitalize = require("./capitalize");

test("if the first letter gets capitalized", () => {
  expect(capitalize("dictionary")).toMatch(/Dictionary/);
  expect(capitalize("thesaurus")).toMatch(/Thesaurus/);
});
