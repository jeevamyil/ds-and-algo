//https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function (board) {
  let flag = true;

  for (let i = 0; i < 9; i++) {
    let rows = new Set();
    let cols = new Set();
    let mats = new Set();

    for (let j = 0; j < 9; j++) {
      rowitem = board[i][j];
      colitem = board[j][i];
      matitem =
        board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)];

      if (rowitem !== ".") if (rows.has(rowitem)) return false;
      rows.add(rowitem);

      if (colitem !== ".") if (cols.has(colitem)) return false;
      cols.add(colitem);

      if (matitem !== ".") if (mats.has(matitem)) return false;
      mats.add(matitem);
    }
  }
  return flag;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
