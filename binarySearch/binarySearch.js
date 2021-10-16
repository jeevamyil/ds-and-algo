const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    console.log(mid,arr[mid])
    if (elem < arr[mid]) {
      end = mid - 1;
    } else if (elem > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15, 16, 17, 21, 24, 25, 27, 32],
    9
  ),
  "ans"
);
