var assert = require('assert');

function hammingDistance(a,b){
  //your code here
  var distance = 0;
  for (var i = 0; i < a.length; i++) {
  	if(a[i] !== b[i]) distance+=1;
  }
  return distance;
}

console.log(hammingDistance('100101', '101001'));

assert.equal(hammingDistance('100101', '101001'),2);
assert.equal(hammingDistance('1010', '0101'),4);