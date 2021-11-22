// 不用加减乘除做加法
function Add(num1, num2){
    while(num2){
      let c = (num1 & num2) << 1;     // c = 进位
      num1 ^= num2;                   // num1 = 非进位和
      num2 = c;                       // num2 = 进位
    }
    return num1;
}