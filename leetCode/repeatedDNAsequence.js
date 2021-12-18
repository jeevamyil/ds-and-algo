var findRepeatedDnaSequences = function (s) {
  let curr = s.slice(0, 10);
  const seen = new Set([curr]);
  const res = new Set();
  for (let i = 10; i < s.length; i++) {
    curr = curr.slice(1) + s[i];
    console.log(curr)
    if (seen.has(curr)) res.add(curr);
    seen.add(curr);
  }
  return [...res];
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
