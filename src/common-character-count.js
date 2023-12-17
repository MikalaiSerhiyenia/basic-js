const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function countChar(str) {
    let result = {};
    for (let char of str) {
      result[char] = (result[char] || 0) + 1;
    }
    return result;
  }
  let count = 0;
  let arr1 = countChar(s1);
  let arr2 = countChar(s2);
  for (let i in arr1) {
    if (arr2.hasOwnProperty(i)) {
      count += Math.min(arr1[i], arr2[i]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
