var wordPattern = function (pattern, s) {
    let keys = pattern.split("");
    let values = s.split(" ");
    if (keys.length !== values.length) return false;
    let obj = {};
    if (new Set(values).size !== new Set(pattern).size) return false;
    for (let i in keys) {
      if (!obj[keys[i]]) {
        obj[keys[i]] = values[i];
      } else {
        if (obj[keys[i]] !== values[i]) return false;
      }
    }
  
    return true;
  };
console.log(wordPattern("abba", "hey there there hey"));


