//Given an integer n, return true if it is a power of two. Otherwise, return false.

const isPowerOfTwo = (num, i = 1) => {
  if (Number.isInteger(Math.log(num / 8) / Math.log(2))) {
    //if (Number.isInteger(Math.log2(num))) {
    return true;
  }
  return false;
};

/*const isPowerOfTwo = (num) => {
    if (num === 1) {
     return true;
   } 
     if(num%2 !== 0||num<=0){
         return false;
     }
     
     else {
       return isPowerOfTwo(num/2);
     }
      return false;
   }
  */

console.log(isPowerOfTwo(2));
