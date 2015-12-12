var assert = require('assert');
var vampire_test = require('../vampireNumbers.js');

describe("Example asserts", function(){
	it("should check vampire numbers", function(){
		assert(vampire_test(6,21));
		assert(!vampire_test(10,11));
	});
});
