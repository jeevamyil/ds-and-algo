const flatten = (array) => {
  let temp = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      temp = temp.concat(flatten(element));
    } else {
      temp.push(element);
    }
  }
  return temp;
};

//console.log(flatten([1,2,3]))
console.log(flatten([1, 2, 3, [1, 2], [1, [2, 3, [1, 2, 3]]]]));

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
