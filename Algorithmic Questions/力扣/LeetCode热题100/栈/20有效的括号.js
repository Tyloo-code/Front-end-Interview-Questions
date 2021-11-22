// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 时间复杂度 O(N)：正确的括号组合需要遍历 11 遍 s; 空间复杂度 O(N)：哈希表和栈使用线性的空间大小。
var isValid = function(s) {
  s = s.split('');
  let s1 = s.length;
  if(s1 % 2) return false;
  // 如遇左括号，则压入栈;如遇右括号，弹出栈，两者对应，则抵消
  let map = new Map([[')','('],[']','['],['}','{']]);
  let stack = [];
  for(let i of s){
    // 如果遇到右括号
    if(map.has(i)){  
      // 栈顶的左括号，不等于此右括号key对应的左括号
      if(!stack.length||stack[stack.length - 1] !== map.get(i)) return false;    
      //栈顶的左括号等于此反括号对应的左括号弹出
      else stack.pop();
    // 如果遇到左括号，压入栈顶
    }else{
      stack.push(i);
    }
  }
  // 最后判断，stack是否为空
  return !stack.length;
};