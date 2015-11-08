var assert = require('assert');

function pattern(n){
	var list = [];
	for (var i = 1; i <= n; i++) {
		var line = [];
		for (var j = n; j >= i ; j--) {
			line.push(j);
		}
		list.push(line.join(''));
	}
	return list.join('\n');
}

assert.equal(pattern(1),"1");
assert.equal(pattern(3),"321\n32\n3");
assert.equal(pattern(5),"54321\n5432\n543\n54\n5");
