function add (num){
	function fn(next){
		num += next;
		return fn;
	}
	fn.valueOf = function() {
		return num;
	}
	fn.toString = function() {
		return num + '';
	}
	return fn
}

var result = add(1)(2)(3)
console.log(+result);//输出6