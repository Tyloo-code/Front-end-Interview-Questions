function recursiveMax(input){
  var flag = false;
  var num = [];
  for(var i=0;i<input.length;i++){
      var obj=input[i];
      if(obj instanceof Array){
          flag = true;
          num.push(recursiveMax(obj));   
      }
  }
  if(flag){
     return Math.max.apply(null,num) + 1 ;
  } else {
     return 1
  } 
}

var res = recursiveMax([1,[[2,3,5,[],6,7,8],4,5,6,7],8,9,10]);
console.log(res) // 4
