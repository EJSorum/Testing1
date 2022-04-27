/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/cipher.js":
      /*!***********************!*\
  !*** ./src/cipher.js ***!
  \***********************/
      /***/ (module) => {
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
        // CORRECT VERSION BELOW???
        // A = 65, Z=90, a = 97, z=122
        function cipher(_int, str) {
          var newStr = "";

          for (var i = 0; i < str.length; i += 1) {
            if (/[a-z]/i.test(str[i])) {
              var code = str.charCodeAt[i];

              if (code > 96) {
                newStr = newStr.concat(
                  String.fromCharCode(97 + ((code - 97 + _int) % 26))
                );
              } else {
                newStr = newStr.concat(
                  String.fromCharCode(65 + ((code - 65 + _int) % 26))
                );
              }
            } else {
              newStr = newStr.concat(str[i]);
            }
          }

          return newStr;
        }
        /*
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
*/

        module.exports = cipher;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!********************!*\
  !*** ./src/app.js ***!
  \********************/
    var cipher = __webpack_require__(/*! ./cipher */ "./src/cipher.js");

    console.log(cipher(2, "abcde"));
    console.log(cipher(87, "abcde"));
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iY2E4MTMyMzdlMjgyNmZiOGVhMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxNQUF4QixFQUFnQ0QsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFFBQUksU0FBU0UsSUFBVCxDQUFjSixHQUFHLENBQUNFLENBQUQsQ0FBakIsQ0FBSixFQUEyQjtBQUN6QixVQUFNRyxJQUFJLEdBQUdMLEdBQUcsQ0FBQ00sVUFBSixDQUFlSixDQUFmLENBQWI7O0FBQ0EsVUFBSUcsSUFBSSxHQUFHLEVBQVgsRUFBZTtBQUNYSixRQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsS0FBSyxDQUFDSixJQUFJLEdBQUMsRUFBTCxHQUFRTixJQUFULElBQWMsRUFBdkMsQ0FBZCxDQUFUO0FBQ0gsT0FGRCxNQUVPO0FBQ0hFLFFBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDTSxNQUFQLENBQWNDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixLQUFLLENBQUNKLElBQUksR0FBQyxFQUFMLEdBQVFOLElBQVQsSUFBYyxFQUF2QyxDQUFkLENBQVQ7QUFDSDtBQUNGLEtBUEQsTUFPTztBQUNMRSxNQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ00sTUFBUCxDQUFjUCxHQUFHLENBQUNFLENBQUQsQ0FBakIsQ0FBVDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0QsTUFBUDtBQUNIO0FBS0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQVMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixNQUFqQjs7Ozs7O1VDOURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQSxJQUFNQSxNQUFNLEdBQUdjLG1CQUFPLENBQUMsaUNBQUQsQ0FBdEI7O0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsTUFBTSxDQUFDLENBQUQsRUFBSSxPQUFKLENBQWxCO0FBQ0FlLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsTUFBTSxDQUFDLEVBQUQsRUFBSyxPQUFMLENBQWxCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0aW5nMS8uL3NyYy9jaXBoZXIuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZzEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdGluZzEvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5jaXBoZXIoKSB0YWtlcyB0d28gcGFyYW1ldGVyczogYW4gaW50ZWdlciBhbmQgYSBzdHJpbmcuICBcbldlIGZpbmQgdGhlIFVGQy0xNiBjaGFyYWN0ZXIgY29kZSBmb3IgZWFjaCBjaGFyYWN0ZXIgaW4gdGhlIHN0cmluZywgYW5kIGluY3JlYXNlIGl0XG5ieSB0aGUgYW1vdW50IG9mIHRoZSBpbnRlZ2VyLiAgV2UgcHV0IHRoZXNlIG5ldyBjaGFyYWN0ZXJzIGludG8gYSBuZXcgc3RyaW5nLlxuXG5cbkZpcnN0IHdlIGRlZmluZSB0aGUgd3JhcCBmdW5jdGlvbiwgd2hpY2ggdGFrZXMgdGhlIGNoYXJhY3RlciBjb2RlIGFuZCB3cmFwcyBpdFxuYmFjayB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhbHBoYWJldCBpZiB0aGUgY2lwaGVyIG1ha2VzIGl0IGdvIHBhc3QgWiBpbiB0aGUgYWxwaGFiZXQuXG4qL1xuXG4vKlxuZnVuY3Rpb24gd3JhcChjaGFyQ29kZSkge1xuICAgIGlmIChjaGFyQ29kZSA+IDEyMikge1xuICAgICAgICByZXR1cm4gOTcgKyBjaGFyQ29kZSAtIDEyM1xuICAgIH0gaWYgKGNoYXJDb2RlID4gNjQgJiYgY2hhckNvZGUgPCA5OCkge1xuICAgICAgIHJldHVybiA2NSArIGNoYXJDb2RlIC0gOTlcbiAgICB9IFxuICAgICAgICByZXR1cm4gY2hhckNvZGUgICBcbn1cbiovXG5cbi8vIENPUlJFQ1QgVkVSU0lPTiBCRUxPVz8/P1xuLy8gQSA9IDY1LCBaPTkwLCBhID0gOTcsIHo9MTIyXG5mdW5jdGlvbiBjaXBoZXIoaW50LCBzdHIpIHtcbiAgICBsZXQgbmV3U3RyID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKC9bYS16XS9pLnRlc3Qoc3RyW2ldKSkgeyAgICAgICAgICBcbiAgICAgICAgY29uc3QgY29kZSA9IHN0ci5jaGFyQ29kZUF0W2ldO1xuICAgICAgICBpZiAoY29kZSA+IDk2KSB7XG4gICAgICAgICAgICBuZXdTdHIgPSBuZXdTdHIuY29uY2F0KFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyAoY29kZS05NytpbnQpJTI2KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdTdHIgPSBuZXdTdHIuY29uY2F0KFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyAoY29kZS02NStpbnQpJTI2KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N0ciA9IG5ld1N0ci5jb25jYXQoc3RyW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0cjtcbn1cblxuXG5cblxuLypcbmZ1bmN0aW9uIGNpcGhlcihpbnQsIHN0cikge1xuICBsZXQgbmV3U3RyID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoL1thLXpdL2kudGVzdChzdHJbaV0pKSB7XG4gICAgICBjb25zdCBjb2RlID0gc3RyLmNoYXJDb2RlQXRbaV07XG4gICAgICBpZiAoY29kZSA+IDk2KSB7XG4gICAgICAgIG5ld1N0ciA9IG5ld1N0ci5jb25jYXQoU3RyaW5nLmZyb21DaGFyQ29kZSh3cmFwKGNvZGUgKyAoaW50ICUgMjYpKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RyID0gbmV3U3RyLmNvbmNhdChTdHJpbmcuZnJvbUNoYXJDb2RlKHdyYXAoNjUgKyAoaW50ICUgMjYpKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHIgPSBuZXdTdHIuY29uY2F0KHN0cltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdTdHI7XG59XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCBjaXBoZXIgPSByZXF1aXJlKFwiLi9jaXBoZXJcIik7XG5cbmNvbnNvbGUubG9nKGNpcGhlcigyLCBcImFiY2RlXCIpKTtcbmNvbnNvbGUubG9nKGNpcGhlcig4NywgXCJhYmNkZVwiKSk7XG4iXSwibmFtZXMiOlsiY2lwaGVyIiwiaW50Iiwic3RyIiwibmV3U3RyIiwiaSIsImxlbmd0aCIsInRlc3QiLCJjb2RlIiwiY2hhckNvZGVBdCIsImNvbmNhdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=
