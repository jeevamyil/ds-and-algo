/* Write a function called sameFrequency which returns true if the given two integers have same frequency of digits */

const sameFrequency = (a, b) => {
  let as = a.toString();
  let bs = b.toString();
  if (as.length !== bs.length) {
    return false;
  }
  let objA = {};
  for (let letter of as) {
    objA[letter] = (objA[letter] || 0) + 1;
  }
  for (let letter of bs) {
    if (!objA[letter]) {
      return false;
    }
    objA[letter] -= 1;
  }
  return true;
};

console.log(sameFrequency(121, 211));
