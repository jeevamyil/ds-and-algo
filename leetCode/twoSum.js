//https://leetcode.com/problems/two-sum/

let twoSum=(nums, target)=> {
    let result=[];
    let map = new Map();
    
    for (let i in nums){
        if(map.has(target-nums[i])){
            result.push(i);
            result.push(map.get(target-nums[i]));
            break;
        }
        else{
            map.set(nums[i],i)
        }
    }
    return result;
    }
    
console.log(twoSum([1,2,3,5,6,12,14],9))