const frequencyCounter = (first, second) => {
  if (first.length != second.length) {
    return false;
  }

  let firstObj = {};
  let secondObj = {};

  for (let element of first) {
    firstObj[element] = (firstObj[element] || 0) + 1;
  }
  for (let element of second) {
    secondObj[element] = (secondObj[element] || 0) + 1;
  }

  for (let key in firstObj) {
    if (!key in secondObj) {
      return false;
    }
    if (firstObj[key] !== secondObj[key]) {
      return false;
    }
  }
  return true;
};

console.log(
  frequencyCounter([1, 2, 2, 3, 4, 4, 4, 4], [1, 2, 2, 3, 4, 4, 4, 4])
);
