'use strict';

function getSum(x, y, z) : number {
	return x + y + z;
};

var args = [1, 2, 3];
var sum = getSum(...args);
console.log(sum);
console.log(`this 
is 
	from no where`);
