var maxSubArray = function(nums) {
    let max= -Infinity;
    let currMax=0;
    for (let i in nums){
        currMax = Math.max(nums[i],nums[i]+currMax);
        max= Math.max(currMax,max)
    }
    return max;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))