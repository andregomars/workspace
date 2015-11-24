var assert = require("assert");
var App = function() {}

function eqSumPowdig(hMax, exp) {
  /*
	n = 2
  while n < hMax
    - split n into digit pieces
    - for each piece
    	- power by exp
    - sum values
    - if (n == sum) [].push(n)
  */ 
  var n = 2;
  var list = [];
  while (n <= hMax) {
  	var val = 0;
  	var nStr = n.toString();
  	for (var i = 0; i < nStr.length; i++) {
  		val += Math.pow(Number(nStr[i]), exp);
  	};
  	if (val === n) list.push(val);
  	n++;
  }
  return list;
}

module.exports = eqSumPowdig;

console.log(eqSumPowdig(100, 2));
console.log(eqSumPowdig(1000, 2));
console.log(eqSumPowdig(2000, 2));
console.log(eqSumPowdig(200, 3));
console.log(eqSumPowdig(370, 3));
console.log(eqSumPowdig(400, 3));
console.log(eqSumPowdig(500, 3));
console.log(eqSumPowdig(1000, 3));
console.log(eqSumPowdig(1500, 3));