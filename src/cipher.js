/*
cipher() takes two parameters: an integer and a string.  
We find the UFC-16 character code for each character in the string, and increase it
by the amount of the integer.  We put these new characters into a new string.
We take care to keep the cipher case-sensitive.  

*/
function cipher(int, str) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (/[a-z]/i.test(str[i])) {
      const code = str.charCodeAt(i);
      if (code > 96) {
        newStr = newStr.concat(
          String.fromCharCode(97 + ((code - 97 + int) % 26))
        );
      } else {
        newStr = newStr.concat(
          String.fromCharCode(65 + ((code - 65 + int) % 26))
        );
      }
    } else {
      newStr = newStr.concat(str[i]);
    }
  }
  return newStr;
}

module.exports = cipher;
