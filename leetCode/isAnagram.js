//https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
    if(s.length!== t.length){
        return false
    }
     let temp = {};
  for (let e of t) {
    temp[e] = (temp[e] || 0) + 1;
  }
  for (let e of s) {
    if (!temp[e]) return false;
    else {
      temp[e] -=1;
    }
  }

  return true;
};


console.log(isAnagram("anagram","nagaram"))