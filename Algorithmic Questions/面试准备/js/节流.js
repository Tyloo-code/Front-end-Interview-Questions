function throttle(fn, delay) {
  let flag = true;
  return function(){
    if(flag){
      setTimeout(() => {
        fn.call(this);
        flag = true;
      }, delay)
    }
    flag = false;  // 没有执行setTimeout就是false，不会继续执行
  }
}