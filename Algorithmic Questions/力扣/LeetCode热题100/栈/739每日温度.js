// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
// 不过这个栈有点特殊，它是 递减栈 ：栈里只有递减元素。
var dailyTemperatures = function(T) {
  const res = new Array(T.length).fill(0);
  const stack = [];
  for(let i = 0; i < T.length; i++){
    // stack[stack.length - 1] 对应 元素的下标，  
    // T[stack[stack.length - 1]] 对应 元素的值。
    while(stack.length !== 0 && T[i] > T[stack[stack.length - 1]]){
      res[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }
    stack.push(i);
  }
  return res
};