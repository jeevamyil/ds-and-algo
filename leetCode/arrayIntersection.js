
https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/

var intersect = function(nums1, nums2) {
    let temp ={}
    let result=[]
    for (let element of nums1){  
    temp[element]=(temp[element]||0)+1;
    }
    for(let element of nums2){
        temp[element]? (result.push(element)&&temp[element]--):null;
        
    }
    
    return result
};

console.log(intersect([1,2,3,4],[3,4]))