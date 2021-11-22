// 用两个栈实现队列
const inStack = [];
const outStack = [];

function push(node)
{
   inStack.push(node);
}

function pop()
{
   if (outStack.length) {
       return outStack.pop()
   }else {
       while(inStack.length){
           outStack.push(inStack.pop());
       }
       return outStack.pop();
   }
}