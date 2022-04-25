function reverse(str) {
  let newStr = ""; // This is an empty string, into which each character of str will be placed.
  for (let i = str.length; i >= 0; i -= 1) {
    // I avoid using a unary operator by writing -= 1 instead of --, to comply with ESLint
    newStr = newStr.concat(str.charAt(i));
  }
  return newStr;
}

module.exports = reverse;
