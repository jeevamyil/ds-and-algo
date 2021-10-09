

const areThereDuplicates=(...args)=>{

    let objA={}
    for (let element of args){
        objA[element]=(objA[element]||0)+1;
    }
 
    for (let element in objA){
        if(objA[element]>1){
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates('a','b','c','a'));