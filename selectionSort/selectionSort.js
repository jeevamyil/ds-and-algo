const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        //console.log(min,j);
        min = j;
      }
    }
    if (i !== min) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      console.log(arr);
    }
  }
  return arr;
};

console.log(selectionSort([1, 2, 3, 4, 12, 343, 5, 466, 76, 88, 797, 56, 23]));
//                         0, 1, 2, 3,  4,   5, 6,   7,  8,  9,  10, 11, 12
