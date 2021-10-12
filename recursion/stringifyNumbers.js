const stringifyNumbers = (obj) => {
  let obj1 = {};
  for (let element in obj) {
    if (typeof obj[element] === "number") {
      obj1[element] = obj[element].toString();
    } else if (
      typeof obj[element] === "object" &&
      !Array.isArray(obj[element])
    ) {
      obj1[element] = stringifyNumbers(obj[element]);
    } else {
      obj1[element] = obj[element];
    }
  }
  return obj1;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
