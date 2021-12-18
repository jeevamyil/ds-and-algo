var groupAnagrams = function (strs) {
  let temp = new Map();
  for (let element of strs) {
    let t = element.split("").sort().join("");
    temp.has(t)
      ? temp.set(t, [...temp.get(t), element])
      : temp.set(t, [element]);
  }
  return [...temp.values()];
};
