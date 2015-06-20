'use strict';
var assert = require('assert');

Array.prototype.avg = function() {
	return this.reduce(function(a,b){
		return a+b;
	},0)/this.length;
};

// console.log([2.75,4.0,3.75].avg());
// assert.equal(3.5,[2.75,4.0,3.75].avg());

// assert(isNaN([].avg()));
// assert.equal([0].avg(), 0);
// assert.equal([3].avg(), 3);

module.exports = Array;