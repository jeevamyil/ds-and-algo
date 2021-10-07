/* count the number of unique values in the given array
array is sorted */

const countUniqueValues = (ip) => {
  if (ip.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < ip.length) {
    //console.log(ip[i], ip[j]);
    if (ip[i] !== ip[j]) {
      i++;
      ip[i] = ip[j];
    }
    j++;
  }
  return i + 1;
};

console.log(countUniqueValues([1, 2, 3, 3, 4]));
