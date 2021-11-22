// 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
// 时间复杂度：O(mn)，空间复杂度：O(mn)，其中 m 和 n 分别是矩阵的行数和列数。
// 单调栈
var maximalRectangle = function(matrix) {
  const m = matrix.length;
  if(m === 0) return 0;
  const n = matrix[0].length;
  const left = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if(matrix[i][j] === '1'){
        left[i][j] = (j === 0 ? 0 : left[i][j-1]) + 1;
      }
    }
  }

  let ret = 0;
  for(let j = 0; j < n; j++){ // 对于每一列，使用基于柱状图的方法
    const up = new Array(m).fill(0);
    const down = new Array(m).fill(0);

    let stack = new Array();
    for(let i = 0; i < m; i++){
      while(stack.length && left[stack[stack.length - 1]][j] >= left[i][j]){
        stack.pop();
      }
      up[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
      stack.push(i);
    }
    stack = [];
    for(let i = m - 1; i >=0; i--){
      while(stack.length && left[stack[stack.length - 1]][j] >= left[i][j]){
        stack.pop();
      }
      down[i] = stack.length === 0 ? m : stack[stack.length - 1];
      stack.push(i);
    }

    for(let i = 0; i < m; i++){
      const height = down[i] - up[i] - 1;
      const area = height * left[i][j];
      ret = Math.max(ret,area);
    }
  }
  return ret;
};