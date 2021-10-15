

  const isPowerOfThree =(num)=>{
    if(num <= 0) return false;
    if (num===(Math.pow(3,Math.floor(Math.log(num) / Math.log(3))))) {
        return true;
      }
      return false;
  }

  console.log(isPowerOfThree(45))


  