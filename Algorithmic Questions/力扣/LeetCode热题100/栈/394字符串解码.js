// 给定一个经过编码的字符串，返回它解码后的字符串。
// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
// 方法：辅助栈，时间复杂度O(N)，空间复杂度O(N)
var decodeString = function(s) {
  let numStack = [],        // 存倍数的栈
      strStack = [],        // 存 待拼接的str 的栈
      num = 0,              // 倍数的“搬运工”
      result = '';          // 字符串的“搬运工”
  for(const char of s){     // 逐字符扫描
    if(!isNaN(char)){       // 遇到数字     isNaN()函数用于检查其参数是否是非数字值。
      num = num * 10 + Number(char);    // 算出倍数
    }else if(char === '['){             // 遇到 [
      strStack.push(result);            // result串入栈
      result = '';                      // 入栈后清零
      numStack.push(num);               // 倍数num进入栈等待
      num = 0;                          // 入栈后清零
    }else if(char === ']'){             // 遇到 ]，两个栈的栈顶出栈
      let repeatTimes = numStack.pop(); // 获取拷贝次数
      result = strStack.pop() + result.repeat(repeatTimes);   // 构建子串
    }else{
      result += char;                   // 遇到字母，追加给result串
    }
  }
  return result;
};