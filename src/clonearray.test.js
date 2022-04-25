const cloneArray = require("./clonearray");

test("properly clones array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});

/*
If we use .toBe the test will fail, because [...array] returns a new array so it is 
technically not the same.  In other words, the value is [1, 2, 3] but it not the same
set of [1, 2, 3].  They are two different arrays in two different places in memory.
See: pass by value and pass by reference.  So we can run not.toBe and it will pass.
*/
