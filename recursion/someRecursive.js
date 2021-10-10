
const someRecursive=(array,callback)=>{

    if(array.length===0){
        return false;
    }
    if(callback(array[0])){
        return true;
    }
    return someRecursive(array.slice(1),callback);
}

console.log(someRecursive([1,2,3,4,5],(num)=>num%2===0))









