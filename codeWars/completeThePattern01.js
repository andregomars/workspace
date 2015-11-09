var assert = require('assert');

function pattern(n){
 var list = [];
 for (var i = 1; i <= n; i++) list.push(Array(i+1).join(i));
 return list.join("\n").trim();
}

// function pattern(n){
// 	var output = "";
// 	if (n-1 === 0) {
// 		return output = "1";
// 	}
// 	else {
// 		output = Array(n+1).join(n);
// 	}
// 	return pattern(n-1) + output;
// }

describe('#pattern()', function(){
	it('should return expected pattern', function(){
		assert.equal(pattern(1),"1");
		assert.equal(pattern(2),"1\n22");
		assert.equal(pattern(5),"1\n22\n333\n4444\n55555");
	});
});