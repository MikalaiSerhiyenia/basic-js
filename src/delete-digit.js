const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split("");
  const subArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    let num = arr.slice();
    num.splice(i, 1);
    subArr.push(num);
  }
  return Math.max(...subArr.map((item) => +item.join("")));
}

module.exports = {
  deleteDigit,
};
