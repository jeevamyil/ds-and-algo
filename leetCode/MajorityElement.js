//https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
  let map = new Map();
  for (let el of nums) {
    map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  }
  for (let el of nums) {
    if (map.get(el) > nums.length / 2) return el;
  }
};
