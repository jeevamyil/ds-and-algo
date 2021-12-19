
var longestPalindrome = function (s) {
  let result = "";
  let length = s.length;
  const helper = (s, i, j) => {
    while (i >= 0 && j < length && s[i] === s[j]) {
      i--;
      j++;
    }
    return s.slice(i + 1, j);
  };
  for (let i=0; i<length ;i++) {
    let odd = helper(s, i, i);
    let even = helper(s, i, i + 1);
    let temp = odd.length > even.length ? odd : even;
    temp.length > result.length ? (result = temp) : result;
  }
  return result;
};

//console.log(longestPalindrome("abadaba"))
//console.log(longestPalindrome("vikatakavi"))
console.log(longestPalindrome("aba"));
