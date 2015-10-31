var assert = require('assert');

// function hammingDistance(a,b){
//   //your code here
//   // var distance = 0;
//   // for (var i = 0; i < a.length; i++) {
//   // 	if(a[i] !== b[i]) distance+=1;
//   // }
//   // return distance;

// }

//const hammingDistance = (a, b) => a.split('').map((v, i) => v != b.charAt(i)).reduce((p, c) => p + c, 0);

function hammingDistance(a,b) {
	return a.split('').map(function(v,i){
		return v != b[i];
	}).reduce(function(p,c){
		return p + c;
	});
};

assert.equal(hammingDistance('100101', '101001'),2);
assert.equal(hammingDistance('1010', '0101'),4);