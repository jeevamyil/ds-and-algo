const isSubsequence = (substring, string) => {
  let first = 0;
  let second = 0;
  if (!substring) return true;
  while (second < string.length) {
    if (string[second] === substring[first]) first++;
    if (first === substring.length) return true;
    second++;
  }
  return false;
};

console.log(isSubsequence("hello", "hello there"));
