function remove(str){
  let res = '',
      len = str.length;
  for(let i = 0; i < len; i++){
     if(str[0] === str[1]){
         str = str.slice(1);
     }else{
         res += str[0];
         str = str.slice(1);
     }
  }
  return res;
}