var assert = require("assert");
var eqSumPowdig = require("../numbersWhichSumOfPowersOfItsDigitsIsTheSameNumber.js");

describe("Example Tests", function() {
	it("should return valid numbers is the sum of powers", function() {
		  assert.deepEqual(eqSumPowdig(100, 2), []);
		  assert.deepEqual(eqSumPowdig(1000, 2), []);
		  assert.deepEqual(eqSumPowdig(2000, 2), []);
		  assert.deepEqual(eqSumPowdig(200, 3), [153]);
		  assert.deepEqual(eqSumPowdig(370, 3), [153, 370]);
		  assert.deepEqual(eqSumPowdig(400, 3), [153, 370, 371]);
		  assert.deepEqual(eqSumPowdig(500, 3), [153, 370, 371, 407]);
		  assert.deepEqual(eqSumPowdig(1000, 3), [153, 370, 371, 407]);
		  assert.deepEqual(eqSumPowdig(1500, 3), [153, 370, 371, 407])
	});
});

