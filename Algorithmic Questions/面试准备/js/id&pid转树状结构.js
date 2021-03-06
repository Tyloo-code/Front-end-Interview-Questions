let data = [
  {id:1, name:'节点1', pid: 0},
  {id:2, name:'节点2', pid: 1},
  {id:3, name:'节点3', pid: 1},
  {id:4, name:'节点4', pid: 2},
  {id:5, name:'节点5', pid: 0},
  {id:6, name:'节点6', pid: 5},
  {id:7, name:'节点7', pid: 6},
  {id:8, name:'节点8', pid: 6},
]
// 方法一：递归
function getTree(array, pid = 0){
  let res = [];
  res = array.filter(v => v.pid === pid).map(v => {
    const children = getTree(array, v.id);
    if(children.length) v.children = getTree(array, v.id);
    return v; 
  })
  return res;
}
console.log(getTree(data));
/*
data = [
  {id: 1, name: "节点1", pid: 0 ,
      children:[
          { id: 2, name: "节点2", pid: 1,
              children:[
                  { id: 4, name: "节点4", pid: 2 },
              ],
          },
          { id: 3, name: "节点3", pid: 1},
      ]
  },
  {id: 5, name: "节点5", pid: 0 ,
      children:[
          { id: 6, name: "节点6", pid: 5,
              children:[
                  { id: 7, name: "节点7", pid: 6 },
                  { id: 8, name: "节点8", pid: 6 },
              ]
          },
      ]
  },
];
*/

// 方法二：非递归
function toTree(data){
  let res = [];
  let map = {};
  data.forEach(item => {
    map[item.id] = item;
  });

  data.forEach(item => {
    let parent = map[item.pid];
    if(parent){
      (parent.children || (parent.children = [])).push(item);
    }else{
      res.push(item);
    }
  });
  return res;
}