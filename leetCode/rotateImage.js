//https://leetcode.com/problems/rotate-image/submissions/

var rotate = function (matrix) {
    for (let i in matrix) {
      for (let j=i ;j<matrix.length;j++) {
        [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
      }
    }
    for (let el of matrix) {
      el.reverse();
    }
  };
  
rotate([[1,2,3],[4,5,6],[7,8,9]])