//https://leetcode.com/problems/3sum/
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let result = [];
  if (nums.length < 3) return result;

  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let temp = nums[i] + nums[j] + nums[k];
      if (temp === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j + 1] === nums[j]) j++;
        while (nums[k - 1] === nums[k]) k--;
        j++;
        k--;
      } else if (temp < 0) j++;
      else k--;
    }
    while (nums[i + 1] === nums[i]) {
      i++;
    }
  }
  return result;
};
