'use strict';
var assert = require('assert');

Array.prototype.avg = function() {
	return this.reduce(function(a,b){
		return a+b;
	},0)/this.length;
	//return this.length;
};

console.log([2.75,4.0,3.75].avg());
assert.equal(3.5,[2.75,4.0,3.75].avg());

console.log([].avg());
console.log([2.75,4.0,3.75,4,4,4,4,4].avg());