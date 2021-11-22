//青蛙跳台阶 初级类似斐波那契 每次1或2阶
function jumpFloor(number)
{
    const cache = {
      0:0,
      1:1
    }
    return _jumpFloor(number + 1)

    function _jumpFloor(number){
      if (cache[number] !== undefined){
         return cache[number]
      }

      cache[number] = _jumpFloor(number -1) + _jumpFloor(number - 2)
      return cache[number]
    }
}