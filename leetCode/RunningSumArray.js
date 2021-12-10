
//https://leetcode.com/problems/running-sum-of-1d-array/

/*var runningSum = function(nums) {
    let temp=0;
    let ans=[];
    for (let el of nums){
        ans.push(el+temp);
        temp+=el;
    }
    return ans;
};*/

var runningSum = function(nums) {
let temp=0;
return nums.map((num)=>temp+=num)
};
