//https://leetcode.com/problems/reshape-the-matrix/submissions/

var matrixReshape = function(nums, r, c) {
    let arr = nums.flat();
    if (r * c != arr.length) return nums;
    let res = [];
    while (arr.length) res.push(arr.splice(0, c));
    return res;
  
  };

  console.log(matrixReshape([[1,2,3],[1,5]],1,5))