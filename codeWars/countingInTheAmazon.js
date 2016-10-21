var assert = require('assert');

const countArara = (n) => {
	var times = Math.floor(n/2);
	var remainder = n%2;
	var arara = [];
	for (var i = 0; i < times; i++) {
		arara.push("adak");
	};
	if (remainder > 0) arara.push("anane");
	return arara.join(" ");
};

//const countArara = n => (Array(parseInt(n / 2) + 1).join("adak ") + (n % 2 ? "anane" : "")).trim();

// function countArara(n) {
//   switch (n) {
//     case 0:  return '';
//     case 1:  return 'anane';
//     case 2:  return 'adak';
//     default: return 'adak ' + countArara(n-2);
//   }
// }

assert.equal(countArara(1),"anane");
assert.equal(countArara(3),"adak anane");
assert.equal(countArara(8),"adak adak adak adak");
//assert.fail(21, 42, 'Test Failed', '###');