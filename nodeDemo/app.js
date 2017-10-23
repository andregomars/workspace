var assert = require('assert');
var clivas = require('clivas');

/*
function reverseWords(words) {
	return words.split(' ').reverse().join(' ');
}

assert.equal(reverseWords('andre go mars')
	, 'mars go andre');
*/


var clivas = require('clivas');

var frame = 0;

setInterval(function() {
	clivas.clear(); // clears the canvas
	clivas.line('hello world (#frame '+frame+')');
	clivas.line('{red:also} {green:colors}!');
	frame++;
}, 200);