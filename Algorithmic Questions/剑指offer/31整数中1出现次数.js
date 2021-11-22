// 整数中1出现的次数
function NumberOf1Between1AndN_Solution(n)
{
    let f = [0,1,20,300,4000,50000,600000,7000000,80000000,900000000,10000000000];
    let res = 0;
    let str = n + '';
    const len = str.length;
    let m = Math.pow(10,len - 1);
    let p = len - 1; //解析中的n
    for(let i = 0; i < len; i++) {
        res += str[i] * f[p];
        if(str[i] === '1' && i !== len - 1) {//中间为1时后面的每一个数都要加一个1，再加上第一个1，比如12中10，11,12三个数的十位有3个1，需要加上，也就是2+1个1要加上
        	res += Number(str.slice(i + 1)) + 1;
        } else if(str[i] === '1' && i === len - 1) {//解决末尾为1但未加上的bug
        	res += 1;
        }
        if(str[i] > 1) res += m;
        m /= 10, p -=1;
    }
    return res;
};

var countDigitOne = function(n) {
  let count = 0;
  for (let i = 1; i <= n; i *= 10) {
      let divide = i * 10;
      let p = Math.floor(n / divide), k = n % divide, rest = 0;
      count += p * i;
      rest = (k > (2 * i - 1)) ? i : ((k < i) ? 0 : k - i + 1);
      count += rest;
  }
  return count;
};
