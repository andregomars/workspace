var assert = require('assert');

function chain(input, fs) {
// implement the "chain" function
  if (fs.length < 1) return input;
  return chain(fs.shift()(input), fs);
}


function add(x) {
  return x + 10;  
}

function mult(x) {
  return x * 30;
}

assert.equal(chain(2, [add, mult]), 360, "Error: chain function does not work");

// var funcs = [add, mult];
// console.log(funcs.length);