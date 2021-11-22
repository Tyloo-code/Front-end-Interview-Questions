String.prototype.repeatify = String.prototype.repeatify || function(times) {
  var str = '';
  for (var i = 0; i < times; i++) {
     str += this;
  }
  return str;
};

console.log('hello'.repeatify(3));