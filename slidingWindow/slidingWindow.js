
const maxSubArraySum=(arr,num)=>{
let initSum=0;
let maxSum=0;

if(arr.length<num){
    return null;
}
for(let i=0;i<num;i++){
    initSum+=arr[i];
}
maxSum=initSum;
for(let i =num; i<arr.length;i++){
    initSum=initSum-arr[i-num]+arr[i];
    maxSum=Math.max(initSum,maxSum);
}
return maxSum
}


console.log(maxSubArraySum([1,2,3,4,23,44,12,3,2,1,2345,53,33,21,324,22],3))