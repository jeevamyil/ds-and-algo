/*  the data is sorted */
const divideAndConquer = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    console.log(middle)
    let middleValue = arr[middle];
    if (middleValue > num) {
      end = middle - 1;
    } else if (middleValue < num) {
      start = middle + 1;
    } else {
      return middle;
 
    }
  }
  return null;
};

console.log(divideAndConquer([1, 2, 3, 4, 5, 6, 7, 8, 56, 66, 75, 87, 564], 5344));
