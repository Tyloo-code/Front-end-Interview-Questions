// 如何得到一个数据流中的中位数？
// 所以时间复杂度是O(N)空间复杂度O(N)
let arr = [];
function Insert(num)
{
  arr.push(num);
  let len = arr.length;

  for(let i = 1; i < len; i++){
    let temp = arr[i];
    let index = i;
    // 排序升序
    while(index > 0 && temp < arr[index - 1]){
      arr[index] = arr[index - 1];
      index--;
    }
    arr[index] = temp;
  }
}
function GetMedian(){
  if(arr.length%2 === 1) return arr[(arr.length-1) / 2];
  else return (arr[arr.length/2] + arr[(arr.length/2) - 1]) / 2;
}


// 力扣
var MedianFinder = function() {
  this.data = [];
};

MedianFinder.prototype.addNum = function(num) {
  if(!this.data.length){
    this.data.push(num);
    return;
  }
  let left = 0, right = this.data.length - 1;
  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(this.data[mid] === num){
      this.data.splice(mid, 0, num);
      return
    }else if(this.data[mid] < num){
      left = mid + 1;
    }else {
      right = mid - 1;
    }
  }
  this.data.splice(right + 1, 0, num);
};

MedianFinder.prototype.findMedian = function() {
  const length = this.data.length;
  if(!length) return null;
  const mid = Math.floor((length - 1) / 2);
  if(length % 2) return this.data[mid];
  return (this.data[mid] + this.data[mid + 1]) / 2; 
};
