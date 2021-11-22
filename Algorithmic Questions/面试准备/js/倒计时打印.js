function sendCode(time_max){
  // let time_max = 10;
  let timeClock = setInterval(function(){
    console.log(time_max);
    time_max--; 
    if(time_max === 0){
      clearInterval(timeClock);
    }
  },1000)
}
console.log(sendCode(10));