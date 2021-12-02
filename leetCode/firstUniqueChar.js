//https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
  let temp = new Map();
  for (let l of s) {
    temp.has(l) ? temp.set(l, temp.get(l) + 1) : temp.set(l, 1);
  }
  console.log(temp);
  for (let i = 0; i < s.length; i++) {
    if (temp.get(s.charAt(i)) === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
