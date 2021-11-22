// 栈的压入、弹出序列
var validateStackSequences = function(pushed, popped) {
  const stack = [];                 //辅助栈
  let index = 0,                    //指向popped当前的下标
      len = pushed.length;
  for (let i = 0; i < len; i++) {
    stack.push(pushed[i]);          //把pushed的元素一个一个入栈
    //把入栈的当前元素和pushed当前指向的元素进行对比 相等话就把辅助栈出栈 pushed下标往右移动
    while(stack.length && stack[stack.length - 1] === popped[index]){
      stack.pop();
      index++;
    }                              
  }
  return !stack.length;             //如果stack为空，说明符合题目
}