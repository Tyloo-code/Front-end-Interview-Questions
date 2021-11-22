// 包含min函数的栈
const data_Stack = [];
const min_Stack = [];

function push(x){
  data_Stack.push(x);
  if(!min_Stack.length || x <= min_Stack[min_Stack.length - 1]) min_Stack.push(x);
}

function pop(){
  if(min_Stack[min_Stack.length - 1] === data_Stack[data_Stack.length - 1]) min_Stack.pop();
  data_Stack.pop();
}

function top(){
  return data_Stack[data_Stack.length - 1];
}

function min(){
  return min_Stack[min_Stack.length - 1];
}