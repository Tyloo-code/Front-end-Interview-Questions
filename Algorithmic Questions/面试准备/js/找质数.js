let num = 1000;
	let res_arr = []; 
	for (var i = 1; i < num; i++) {
		let e = i;
		let noDivision = !divisionItem(res_arr, e)
		if (e != 1 && noDivision) {
			res_arr.push(e)
		}
	}

	console.log(res_arr);

	// 每一个数字 和已有的自然数进行对比是否可以整除
	function divisionItem(arr, item) {
		let res = false;
		for (var i = 0; i < arr.length; i++) {
			let e = arr[i];
			if (item % e === 0) {
				res = true
				break;
			}
		}
		return res;
	}
