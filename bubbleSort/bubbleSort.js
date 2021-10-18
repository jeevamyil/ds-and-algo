const bubbleSort = (arr) => {
  let swapflag;
  for (let i = arr.length - 1; i >= 0; i--) {
    swapflag = true;
    for (let j = 0; j < i; j++) {
     // console.log(arr[j], arr[j + 1]);
      if (arr[j] >= arr[j + 1]) {
       // console.log("swapped");
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapflag = false;
      }
    }
    if (swapflag) {
      break;
    }
  }
  return arr;
};
let arrq = [1, 2, 3, 4, 12, 343, 5, 466, 76, 88, 797, 56, 23];
bubbleSort(arrq);
console.log(arrq);
