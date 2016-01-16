function deepCompare(o1, o2) {
	if (typeof o1 === "undefined" && typeof o2 === "undefined") return true;
	if (!o1 && !o2 && typeof o1 !== "undefined" && typeof o2 !== "undefined") return true;
	if (!o1 || !o2) return false;
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
		return isEqual ? true : false;
	} 
	else {
		return o1 === o2;
	}
}

/* best solution!!
function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  var keys = Object.keys(o1);
  return keys.every(function(key) {
    return deepCompare(o1[key], o2[key]);
  });
};
*/

console.log(deepCompare(55,55));
console.log(deepCompare({name:"andre"},{name:"andre"}));
console.log(deepCompare({name:"andre", extra:{age:5, gender:"male"}},{name:"andre", extra:{age:5, gender:"male"}}));
console.log(deepCompare(1,true));
console.log(deepCompare({},{}));
console.log(deepCompare({name:"22"},{name:22}));
console.log(deepCompare({name:"andre", age:13},{age:13, name:"andre"}));
console.log(deepCompare(undefined,3));
console.log(deepCompare(3,null));
console.log(deepCompare(null,undefined));
console.log(deepCompare(undefined,null));
console.log(deepCompare(undefined,undefined));
console.log(deepCompare(null,null));