var assert = require('assert');


function reverseWords(words) {
	return words.split(' ').reverse().join(' ');
}

assert.equal(reverseWords('andre go mars')
	, 'mars go andre');