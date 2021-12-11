var merge = function (intervals) {
  if (intervals.length == 0) return [];

  else if (intervals.length == 1) return intervals; 

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let result = [intervals[0]];

  for (let interval of intervals) {
    let recent = result[result.length - 1];
    if (recent[1] >= interval[0]) {
      recent[1] = Math.max(recent[1], interval[1]);
    } else result.push(interval);
  }
  return result;
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [15, 18],
    [8, 10],
  ])
);
