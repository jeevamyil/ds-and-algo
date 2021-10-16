const linearSearch=(arr,elem)=>{

    for (let element in arr){
        if (arr[element] === elem){
            return +element;
        }
    
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5,6,34,5342,1324,223,54,12,2,3],3443))