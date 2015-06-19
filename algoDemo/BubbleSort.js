'use strict';
var assert = require('assert');

var swap = function(array, p, r) {
	var temp = array[p];
	array[p] = array[r];
	array[r] = temp;
};

var bubbleSort = function(array, p, r) {
	/*
		base case: p = r
			return
		when p < r, compare and swap for each tuple shifts from p

	*/
	if (p === r) return;

	if (p < r) {
		var q = p;
		while (q < r) {
			if (array[q] > array[q+1]) {
				swap(array, q, q+1);
			}
			q++;
		}	
		bubbleSort(array, p, r-1);
	}
};


var arraySwap = [7,8,9]
swap(arraySwap,1,2);
assert.deepEqual(arraySwap,[7,9,8]);

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
bubbleSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
assert.deepEqual(array, [2,3,5,6,7,9,10,11,12,14]);