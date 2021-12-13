//https://leetcode.com/problems/pascals-triangle-ii/

var getRow = function (rowIndex) {
  let result = [];
  for (let i = 0; i <= rowIndex; i++) {
    result[i] = [];
    result[i][0] = 1;
    result[i][i] = 1;
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
    }
  }
  return result[rowIndex];
};

console.log(getRow(5));
