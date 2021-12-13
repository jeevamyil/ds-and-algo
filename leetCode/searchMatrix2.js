var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;
  let row = matrix.length,
    col = matrix[0].length;
  if (matrix[0][0] > target || matrix[row - 1][col - 1] < target) return false;
  let i = 0;
  while (i < row) {
    if (matrix[i][0] <= target && matrix[i][col - 1] >= target) {
      if (search(matrix[i], target)) return true;
    }
    i++;
  }
  return false;
};

function search(arr, target) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
}
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
console.log(searchMatrix([[2], [5]], 5));
console.log(
  searchMatrix(
    [
      [1, 4],
      [2, 5],
    ],
    4
  )
);

console.log(
  searchMatrix(
    [
      [1, 4],
      [2, 5],
    ],
    2
  )
);

console.log(
  searchMatrix(
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ],
    25
  )
);
