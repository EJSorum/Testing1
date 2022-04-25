const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(
    // This means you take the first part and do what the second part says.
    sum(1, 2) // First part
  ).toBe(3); // Second part
});

/*
In other words, we take the sum function and check that it returns 3 when we 
pass in 1 and 2.  This is true, because the sum function adds the numbers it 
receives.
*/

/*
test is the command used to run a test.
Then, inside the parentheses is first a string.
The string can be anything you want, explaining what the test does.
Next is an arrow function, which is used to the run the test.

This test function could be written like an if statement:
if (sum(1, 2 === 3) {
    *success*
} else {
    throw Error
}
})

Using expect and .toBe is a shorter way of doing this.

Now you can do npm test in the CLI to run Jest.
*/
