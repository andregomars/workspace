var assert = require('assert');

var func = function(item){
    //your code here
    return parseInt(item) % 2 == 0 ? true : false;
}

function map(arr, somefunction){
    // your code here
    	if (!somefunction || typeof somefunction != 'function') return 'given argument is not a function';
    	if (!arr || arr.length < 1) return 'array should contain only numbers';
    	var outs = [];
    	for (var i = 0; i < arr.length; i++) {
    		if (!arr[i] || isNaN(arr[i])) return 'array should contain only numbers';
    		outs.push(somefunction(arr[i]));
    	};
    	return outs;
    }

// var array = [27, 18, 5,'8', '66'];
// //var array = [8, 12, 't'];
// console.log(array);
// //var arrayOut = map(array,func);
// var arrayOut = map(array,'str');
// console.log(arrayOut);

assert.deepEqual(map([27, 18, 5,'8', '66'],func),[ false, true, false, true, true ])
assert.deepEqual(map([48, 33, 2, 1],'str'),'given argument is not a function')
assert.deepEqual(map([8, 12, 't'],func), 'array should contain only numbers')
