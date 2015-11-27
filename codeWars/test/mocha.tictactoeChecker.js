var assert = require('assert');
var isSolved = require('../tictactoeChecker.js');

describe("Example asserts", function() {
	it("should check if the tic-tac-toe is done", function() {
		assert.equal(isSolved([[0,0,1],
		                      [0,1,2],
		                      [2,1,0]]), -1);
		assert.equal(isSolved([[1,2,1],
							  [2,1,2],
							  [2,1,1]]), 1);
		assert.equal(isSolved([[2,0,1],
							  [0,1,2],
							  [1,2,0]]), 1);
		assert.equal(isSolved([[2,0,1],
							  [0,2,0],
							  [1,1,2]]), 2);
		assert.equal(isSolved([[1,2,1],
								[1,1,2],
								[2,1,2]]), 0);
	});
});