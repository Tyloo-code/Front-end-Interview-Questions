// 给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。
// 然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
// 你需要计算完成所有任务所需要的 最短时间 。
var leastInterval = function(tasks, n) {
  let h = Array(26).fill(0);                  // 建立26个空桶
  for(let i = 0; i < tasks.length; i++){
    h[tasks[i].charCodeAt() - 65]++;          //统计每个字母出现的次数，向对应的桶内添加
  }
  let max = Math.max(...h),                   //找到出现最多次数的字母次数
      maxCount = 0;
  h.forEach(m => m === max && maxCount++);    //一共有多少个任务和出现最多的那个任务出现次数一样
  return Math.max((max - 1) * (n + 1) + maxCount, tasks.length);
};
