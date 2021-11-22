function debounce(fn, delay) {
  let t = null;
  return function(){
    if(t !== null){
      clearTimeout(t);
    }
    t = setTimeout(() => {
      fn.call(this);
    },delay)
  } 
}

