var assert = require('assert');

const narcissistic = (value) => value === value.toString().split('').map((a)=>Math.pow(a,3)).reduce((a,b)=>a+b) ? true : false;


assert.equal(narcissistic(7), false);
assert.equal(narcissistic(371), true);
// assert.equal(narcissistic(115), true);
// assert.equal(narcissistic(1634), true);

