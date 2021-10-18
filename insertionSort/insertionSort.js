const insertionSort = (arr) => {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
  //  console.log(currentVal, "-current ", i, " -iterator ");
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
     // console.log(j, arr[j]);
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }
  return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4]));
