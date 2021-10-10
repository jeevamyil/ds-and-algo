const collectOdds = (arr) => {
  let oddArray = [];

  if (arr.length < 1) {
    return oddArray;
  }

  if (arr[0] % 2 !== 0) {
    oddArray.push(arr[0]);
  }

  oddArray = oddArray.concat(collectOdds(arr.slice(1)));
  return oddArray;
};

console.log(collectOdds([1, 2, 3, 4, 5, 6]));
