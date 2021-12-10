var singleNumber = function (nums) {
  let map = new Map();
  for (let el of nums) {
    map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  }
  for (let el of nums) {
    if (map.get(el) === 1) return el;
  }
};

console.log(singleNumber([2, 1, 1]));
/* 
var singleNumber = function(nums) {
    let ans = 0;
    for(let i=0;i< nums.length;i++){
        ans = ans  ^ nums[i];
    }
    return ans;
}; */