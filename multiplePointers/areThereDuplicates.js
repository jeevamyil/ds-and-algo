/* checks if the input data have duplicate values */

const areThereDuplicates = (...args) => {
  args.sort((a, b) => a - b);

  let first = 0;
  let second = 1;

  for (second; second < args.length; second++) {
    if (args[first] === args[second]) {
      return true;
    }
    first++;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3, 1, 2, 3));
