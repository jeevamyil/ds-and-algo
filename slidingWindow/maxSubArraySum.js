

const maxSubArraySum=(array,subarraylength)=>{
    let initialSum=0, maxSum=0;
    if(subarraylength>array.length){
        return null;
    }
    for(let i=0;i<subarraylength;i++){
        initialSum+=array[i];
        console.log(initialSum);
    }
    maxSum=initialSum;
    for(let i=subarraylength;i<array.length;i++){
        initialSum=initialSum-array[i-subarraylength]+array[i];
        maxSum=Math.max(initialSum,maxSum);
    }
    return maxSum;

}

console.log(maxSubArraySum([1,2,3,4,5,6,6,7,34,56,23,435,34],2))