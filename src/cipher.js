/*
cipher() takes two parameters: an integer and a string.  
We find the UFC-16 character code for each character in the string, and increase it
by the amount of the integer.  We put these new characters into a new string.


First we define the wrap function, which takes the character code and wraps it
back to the beginning of the alphabet if the cipher makes it go past Z in the alphabet.
*/

/*
function wrap(charCode) {
    if (charCode > 122) {
        return 97 + charCode - 123
    } if (charCode > 64 && charCode < 98) {
       return 65 + charCode - 99
    } 
        return charCode   
}
*/

function cipher(int, str) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (/[a-z]/i.test(str[i])) {
      const code = str.charCodeAt[i];
      if (code > 96) {
        newStr = newStr.concat(String.fromCharCode(wrap(code + (int % 26))));
      } else {
        newStr = newStr.concat(String.fromCharCode(wrap(65 + (int % 26))));
      }
    } else {
      newStr = newStr.concat(str[i]);
    }
  }
  return newStr;
}

module.exports = cipher;
