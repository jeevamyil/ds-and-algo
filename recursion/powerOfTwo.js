//Given an integer n, return true if it is a power of two. Otherwise, return false.

const isPowerOfTwo = (num, i = 1) => {
  /* if (num === 1) {
    return true;
  } else if (i <= num) {
    if (Math.pow(2, i) === num) {
      return true;
    } else {
      i++;
      return isPowerOfTwo(num, i);
    }
  }
  return false;*/

  if (Number.isInteger(Math.log(num / 8) / Math.log(2))) {
    //if (Number.isInteger(Math.log2(num))) {
    return true;
  }
  return false;
};

console.log(isPowerOfTwo(2));
