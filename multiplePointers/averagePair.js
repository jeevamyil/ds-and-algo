const averagePair = (arr, avg) => {
  let start = 0;
  let second = arr.length - 1;
  if (arr.length < 1) {
    return false;
  }
  while (start < second) {
    let temp = (arr[start] + arr[second]) / 2;
    console.log(temp, "->", arr[start], "+", arr[second], "/2");
    if (temp === avg) {
      return true;
    } else if (temp < avg) {
        start++;
    } else {
        second--;
      
    }
  }
  return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
