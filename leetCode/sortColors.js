//https://leetcode.com/problems/sort-colors/submissions/

var sortColors = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let pointer = start;
  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };
  while (pointer < end) {
    if (nums[pointer] === 0) {
      swap(pointer, start);
      start++;
      pointer++;
    } else if (nums[pointer] === 2) {
      swap(pointer, end);
      end--;
    } else {
      pointer++;
    }
  }
};

colors = [0, 1, 2, 2, 1, 0];
console.log(colors);
sortColors(colors);
console.log(colors);
