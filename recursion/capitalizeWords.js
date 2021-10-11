

const capitalizeWords=(arr)=>{

    if(arr.length===1){
        return [arr[0].toUpperCase()];
    }
    let result= capitalizeWords(arr.slice(0,-1));
    let temp= arr[arr.length-1].toUpperCase();
    result.push(temp);
    return result;


}

console.log(capitalizeWords(['hola','amigo']));