//矩形覆盖
function rectCover(number)
{
 if(number<=2)
     return number
  let a = 1
  let b = 2
  let sum = 0
  for(let i=3;i<=number;i++){
      sum = a+b;
      a = b;
      b = sum
  }
    return sum;
}