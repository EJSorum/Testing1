function sum(a, b) {
  return a + b;
}

function helper() {
  console.log("Helper");
}
// helper() is irrelevant code to show that Jest does not see it being tested anywhere.

module.exports = sum;
