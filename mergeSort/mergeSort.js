const sorter = (arr1, arr2) => {
  console.log("hit!!", arr1, arr2);
  let result = [];
  let i = 0;
  j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  console.log(arr.slice(0, mid), " 1st half",arr.slice(mid), " 2nd half");
  let left = mergeSort(arr.slice(0, mid));
  console.log(left, "left array");
  let right = mergeSort(arr.slice(mid));
  console.log(right, "right array");

  return sorter(left, right);
};

console.log(mergeSort([1, 3, 6, 2, 8, 4]));
