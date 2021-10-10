const factorial_recursive = (num) => {
    if (num< 0 ) return 0;
    if (num <= 1) {
      return 1;
    }
  return num * factorial_recursive(num - 1);
};

console.log(factorial_recursive(7));


const factorial_iterative =(num)=>{
let ans=1;
while(num>0){
    ans*=num;
    num--;
}
return ans;
}

console.log(factorial_iterative(5));