const countDown = (num) => {
  if (num < 1) {
    console.log("finished");
    return;
  }
  console.log(num);
  countDown(num - 1);
};



const countDownIterative=(num)=>{
    while(num>=1){
        console.log(num);
        num--;
    }
    console.log('finished')
}

countDownIterative(3)
countDown(5);
