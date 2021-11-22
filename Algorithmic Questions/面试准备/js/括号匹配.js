// 判断括号是否合法
// 如遇左括号，则压入栈;如遇右括号，弹出栈，两者对应，则抵消
var isValid = function(s) {
  s1 = s.split('');
  if(s1 % 2) return false;
  let map = new Map([['}','{'],[']','['],[')','(']]);
  let stack = [];
  // 遍历字符串 进行入栈出栈操作
  for(let i of s1){
    if(map.has(i)){      // 如果遇到右括号
      if(!stack.length || stack[stack.length - 1] !== map.get(i)) return false;// 栈顶的左括号，不等于此右括号key对应的左括号
      else stack.pop();
    }else{
      stack.push(i);   // 如果遇到左括号，压入栈顶
    }
  }
  return !stack.length;
}