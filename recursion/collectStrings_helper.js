const collectStrings = (obj) => {
  let array = [];

  const helper = (ob) => {
    for (let item in ob) {
      if (typeof ob[item] === "string") {
        array.push(ob[item]);
      }
      if (typeof ob[item] === "object") {
        //return helper(ob[item])
        // array.concat(helper(ob[item]));
        helper(ob[item]);
      }
    }
  };
  helper(obj);
  return array;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
console.log(collectStrings(obj));
