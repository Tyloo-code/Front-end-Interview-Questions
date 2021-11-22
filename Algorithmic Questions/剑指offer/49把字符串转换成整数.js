// 把字符串转换成整数
function StrToInt(str)
{
  let reg = /^(\-|\+)?\d+?$/;
  return reg.test(str) ? Number(str) : 0;
}

// 使用库函数parseInt
function StrToInt(str)
{
    // write code here
    var ans = parseInt(str);
    if(ans === 0 || isNaN(str) || !str)
    {
        return 0;
    }
    return ans;
}