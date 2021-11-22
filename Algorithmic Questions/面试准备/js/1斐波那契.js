//斐波那契 动态规划 备忘录法
// 动态规划
function Fibonacci(n)
{
  let a = 0, b = 1;
  let sum = 0;
  for(let i = 0; i < n; i++){
      sum = a + b;
      a = b;
      b = sum;
  }
    return a;
}

// 尾递归优化
var fib = function(n) {
  return fibImpl(0, 1, n);
};
function fibImpl(a, b, n) {//a,b 分别对应 F(0), F(1)
  if (n == 0) return a;
  return fibImpl(b, a + b, n - 1); // a + b ----> F(N - 1) + F(N - 2)
}


// 在动态规划的一种做法中，可以借助“备忘录”来实现结果的缓存，避免重复计算。
// 代码如下，时间复杂度是 O(N)，空间复杂度是 O(1)。
function Fibonacci1(n)
{
    const cache = {
        0: 0,
        1: 1
    };
    return _Fibonacci(n);
    
    function _Fibonacci(n){
        if(cache[n] !== undefined){
            return cache[n];
        }
        cache[n] = _Fibonacci(n-1) + _Fibonacci(n-2);
        return cache[n]
    }
}
console.log(Fibonacci1(10))

// 虽然备忘录用了 O(N)的空间。但是重复计算同个 f(n)的结果时候，时间复杂度是 O(1)。比如之前调用过一次Fibonacci(10)，那么 f(10)的结果就缓存在了 cache 中。再次调用函数，直接从缓存读取即可。
// 同样地，当 n < 10 时候，结果都是从 cache 中直接读取，时间复杂度均是 O(1)。
// 再推广，当计算 f(20)的时候，n < 10 的结果都计算完了，不需要重复计算。效率是高于第一种循环写法的调用。
// 总结：备忘录缓存了计算结果，避免了多次调用时的重复计算。
