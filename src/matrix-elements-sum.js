const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const width = matrix[0].length;
  const height = matrix.length;
  let result = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (matrix[j][i] === 0) {
        break;
      }
      result += matrix[j][i];
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum,
};
