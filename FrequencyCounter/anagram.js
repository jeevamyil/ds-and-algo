const anagramFinder = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  let str = {};
  for (let letter of a) {
    str[letter] = (str[letter] || 0) + 1;
  }
  for (let letter of b) {
    if (!str[letter]) {
      return false;
    } else {
      str[letter] -= 1;
    }
  }
  return true;
};

console.log(anagramFinder("hello", "lleoh"));
