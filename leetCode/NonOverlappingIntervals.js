var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let temp = [-1, -1];
  for (let element of intervals) {
    if (element[0] < temp[1]) {
      count++;
    } else {
      temp = element;
    }
  }
  return count;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
);
