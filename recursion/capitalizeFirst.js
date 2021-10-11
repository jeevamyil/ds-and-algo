const capitalizeFirst = (array) => {
  if (array.length === 1) {
    return [array[0][0].toUpperCase().concat(array[0].substr(1))];
  }
  let result = capitalizeFirst(array.slice(0, -1));
  let word = array
    .slice(array.length - 1)[0][0]
    .toUpperCase()
    .concat(array[array.length - 1].substr(1));
  result.push(word);
  return result;
};

console.log(capitalizeFirst(["hola amigo", "car", "bike", "jet"]));
