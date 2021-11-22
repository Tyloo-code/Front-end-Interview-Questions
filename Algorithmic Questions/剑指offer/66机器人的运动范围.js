// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。
// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/solution/mian-shi-ti-13-ji-qi-ren-de-yun-dong-fan-wei-dfs-b/
// 时间、空间复杂度 O(MN)
// 深度优先遍历 DFS
function movingCount(threshold, rows, cols){
    let flag = new Array(rows).fill(0).map(x => Array(cols).fill(false));
    return getRes(flag, rows, cols, 0, 0, threshold);
}
function getRes(flag, row, col, x, y, k){
    // i >= m || j >= n是边界条件的判断     
    // k < sum(i, j)判断当前格子坐标是否满足条件    
    // flag[i][j]判断这个格子是否被访问过
    if(x < 0 || y < 0 || x >= row || y >= col || flag[x][y] || sum(x, y) > k) return 0;
    flag[x][y] = true;     // 标注这个格子被访问过
    return 1 + getRes(flag, row, col, x+1, y, k) + getRes(flag, row, col, x, y+1, k);  // 沿着当前格子的右边和下边继续访问
}
// 按位求和
function sum(row, col){
    let str = row + '' + col;
    let res = 0;
    for(let i = 0; i < str.length; i++){
        res += parseInt(str[i]);
    }
    return res;
}

