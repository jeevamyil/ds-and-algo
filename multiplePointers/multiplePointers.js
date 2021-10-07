/* to find the first pair of numbers which gives 0 when added together
--the input array is sorted 
*/

const multiplePointer = (ip) => {
  let pointer1 = 0;
  let pointer2 = ip.length - 1;

  while (pointer2 > pointer1) {
    let sum = ip[pointer1] + ip[pointer2];
    if (sum === 0) {
      return [ip[pointer1], ip[pointer2]];
    } else if (sum > 0) {
      pointer2 -= 1;
    } else if (sum < 0) {
      pointer1 += 1;
    }
  }
};

console.log(multiplePointer([-4, -2, -1, 0, 1, 2, 5, 6]));
