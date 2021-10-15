let s = ["k", "e", "e", "p"];

const reverseString = (s, i = s.length - 1) => {
    console.log(i)
  if (i < 1) {
    return;
  } else {
    i -= 1;
    s.push(...s.splice(i, 1));
    reverseString(s, i);
  }
};
reverseString(s);

console.log(s);
