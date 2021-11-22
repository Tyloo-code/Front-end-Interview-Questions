// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

// 用有向图描述依赖关系
var canFinish = function(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);           // 入度数组
  const map = {};                                           // 邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;                        // 求课的初始入度值
    if(map[prerequisites[i][1]]) {                          // 当前课已经存在于邻接表
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    }else{                                                  // 当前课不存在于邻接表
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }
  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {               // 所有入度为0的课入列
    if(inDegree[i] === 0) queue.push(i);    
  }
  let count = 0;
  while(queue.length){
    const selected = queue.shift();                         // 当前选的课，出列
    count++;                                                // 选课数+1
    const toEnQueue = map[selected];                        // 获取这门课对应的后续课
    if(toEnQueue && toEnQueue.length){                      // 确实有后续课
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;                           // 依赖它的后续课的入度-1
        if(inDegree[toEnQueue[i]] === 0){                   // 如果因此减为0，入列
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return count == numCourses;                               // 选了的课等于总课数，true，否则false
};