function deepCompare(o1, o2) {
	if (Object.keys(o1).length > 0 && Object.keys(o2).length > 0 
		&& Object.keys(o1).length === Object.keys(o2).length) {
		var isEqual = true;
		debugger;
		for (var prop in o1) {
			if (typeof o1[prop] === "object") {
				isEqual = isEqual & deepCompare(o1[prop], o2[prop]);
			}
			else {
				isEqual = isEqual & o1[prop] === o2[prop];
			}
		};
		return isEqual;
	} 
	else {
		return o1 === o2;
	}
}

console.log(deepCompare(55,55));
console.log(deepCompare({name:"andre"},{name:"andre"}));
console.log(deepCompare({name:"andre", extra:{age:5, gender:"male"}},{name:"andre", extra:{age:5, gender:"male"}}));