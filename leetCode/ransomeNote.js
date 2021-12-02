//https://leetcode.com/problems/ransom-note/

var canConstruct = function (ransomNote, magazine) {
  let temp = {};
  for (let e of magazine) {
    temp[e] = (temp[e] || 0) + 1;
  }
  for (let e of ransomNote) {
    if (!temp[e]) return false;
    else {
      temp[e] = 0;
    }
  }

  return true;
};

console.log(canConstruct("he", "hello"));
