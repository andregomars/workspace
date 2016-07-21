/*
given a word like 'abcd', list all the possible permutations
*/

var assert = require('assert');

var permuteString = function(input) {
	var out = [];
	var used = [];

	function permute(input) {
		
		//when the last item there in the input, push it into used 
		if (input.length == 1) {
			used.push(input[0]);
		}
		var cur = null;

		//start from a, then b, c,d, index incresed one after another
		for(var i=0; i<input.length;i++) {
			//pop out current used item
			cur = input.splice(i,1)[0];
			used.push(cur);
			permute(input);

		}
		
		//permute left items in a new input, less and less, 
		//till the last item there in the input
		permute(input, )
	}
};


//assert.equal(permuteString(input),[...]]);
/*
abcd bacd	cabd	dabc
abdc badc
acbd bcad
acdb bcda
adbc bdac
adcb bdca
*/