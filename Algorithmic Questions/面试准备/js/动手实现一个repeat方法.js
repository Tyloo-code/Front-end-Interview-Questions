// 实现一个repeat方法，会输出4次hello，每次间隔3s
// 方法一  直接打印 然后每四秒一次
function repeat(func, times, wait){
  return function(){
    let _args = arguments;
    let handle = function(i){
      setTimeout(() => {
        console.log(`这是第${i}次打印`)
        func.apply(null, _args);
        
      }, wait * i);
    };
    for(let i = 0; i < times; i++){
      handle(i);
    }
  }
}

// 方法二   先等4秒再打印
function repeat(func, times, wait){
  return value => {
    let timesTemp = times;
    let interval = setInterval(() => {
      func(value);
      timesTemp--;
      timesTemp === 0 && clearInterval(interval);
    }, wait);
  }
}

// 使调用下面代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hello world")