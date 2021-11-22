// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

// 深度优先
// 时间复杂度：O(MN)，其中 M 和 N 分别为行数和列数。
// 空间复杂度：O(MN)，在最坏情况下，整个网格均为陆地，深度优先搜索的深度达到 MN 。

//主函数遍历 
var numIslands = function(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === '1'){
        count++;
        turnZero(i, j, grid); 
      }
    }    
  }
  return count;
};
// 边界条件判断
const turnZero = (i, j, grid) => {
  if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return
  grid[i][j] = '0';
  turnZero(i, j + 1, grid);
  turnZero(i, j - 1, grid);
  turnZero(i + 1, j, grid);
  turnZero(i - 1, j, grid);
}