let arr= [1,2,3,4,5,1,2];
let rep = [];
arr.forEach((item,index)=>{
	if(arr.indexOf(item)!=index){ // 匹配数组元素第一个item位置和当前循环的index
        let obj = {};
        obj.key = (arr.indexOf(item) + 1) + '|' + (index + 1); // 用'|'分隔两个重复项的下标   
		obj.value = item;
        rep.push(obj);
	}
});
console.log(rep)
