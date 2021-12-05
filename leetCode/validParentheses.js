//https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  if (s.length % 2 !== 0) return false;

  const dict = new Map([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);
  const stack = [];
  for (let i in s) {
    const currChar = s[i];
    const lastChar = stack[stack.length - 1];
    const delChar = dict.get(currChar);
    if (delChar) {
      if (delChar === lastChar) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(currChar);
    }
  }
  return !stack.length;
};

console.log(isValid("[{]}"));
