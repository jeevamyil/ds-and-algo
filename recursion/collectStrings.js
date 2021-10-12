const collectStrings = (obj) => {
  let array=[];
  for(let item in obj){
      if(typeof obj[item]==='string'){
          array.push(obj[item])
      }
      if(typeof obj[item]==='object'){
         array=array.concat(collectStrings(obj[item]));
      }
  }
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
