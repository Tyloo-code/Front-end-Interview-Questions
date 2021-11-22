// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// 时间复杂度O(1), 空间复杂度O(N)
// 方法：辅助栈

// 一个栈存放全部的元素，push，pop都是正常操作这个正常栈。
// 另一个存放最小栈。 每次push，如果比最小栈的栈顶还小，我们就push进最小栈，否则不操作
// 每次pop的时候，我们都判断其是否和最小栈栈顶元素相同，如果相同，那么我们pop掉最小栈的栈顶元素即可


/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

// @return {void}
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]){
    this.minStack.push(val);
  }
};

// @return {void}
MinStack.prototype.pop = function() {
  const x = this.stack.pop()
  if (x !== void 0 &&  x === this.minStack[this.minStack.length - 1]) {
    // x !== void 0 等价于 x !== undefined
    this.minStack.pop()
  }
};

// @return {number}
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

// @return {number}
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};