//https://leetcode.com/problems/search-a-2d-matrix/

/*var searchMatrix = function (matrix, target) {
  let flag = false;
  for (let element of matrix) {
    for (let e of element) {
      console.log(e);
      e === target ? (flag = true) : null;
    }
  }
  return flag;
};
*/

var searchMatrix = function (matrix, target) {
  let start = 0;
  let end = matrix.length * matrix[0].length - 1;
  while (start <= end) {
    let mid = Math.floor((start+end) / 2);
    let midV =
      matrix[Math.floor(mid / matrix[0].length)][
        (mid % matrix[0].length)
      ];
    if (midV === target) return true;
    else if (midV > target) {
      end = mid - 1;
    } else start = mid + 1;
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
