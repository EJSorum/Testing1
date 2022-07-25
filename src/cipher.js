/*
Caesar Cipher

cipher() takes two parameters: an integer and a string.  It changes each character
in the string forward in the alphabet int number of places.
We find the UFC-16 character code for each character in the string, and increase it
by the amount of the integer.  We put these new characters into a new string.
We take care to keep the cipher case-sensitive by dealing with lowercase
and uppercase separately.  In each case, we use a formula to determine how 
many places from the beginning of the alphabet the new character is and add
that character to the new string.

*/
function cipher(int, str) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (/[a-z]/i.test(str[i])) {
      const code = str.charCodeAt(i);
      if (code > 96) {
        // Lowercase characters
        newStr = newStr.concat(
          String.fromCharCode(97 + ((code - 97 + int) % 26))
        );
      } else {
        // Uppercase characters
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
