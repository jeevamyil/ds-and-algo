const collectOdds = (arr) => {
  let oddArray = [];

  const oddHelper = (newarr) => {
    if (newarr.length < 1) {
      return 0;
    }
    if (newarr[0] % 2 === 0) {
      oddArray.push(newarr[0]);
    }
    oddHelper(newarr.slice(1));
  };
  oddHelper(arr);
  return oddArray;
};

console.log(collectOdds([1, 2, 3, 4, 5, 6]));
