var isPail = function(x){
  if(x < 0 || (!(x % 10) && x)) return false;
  let temp = x, res = 0;
  while(temp){
    res = res * 10 + temp % 10;
    temp = ~~(temp / 10);
  }
  return res === x;
}