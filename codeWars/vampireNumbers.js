function vampire_test(a,b) {
	return String(a*b).split('').sort().join('') === (''+a+b).split('').sort().join('');
}

module.exports = vampire_test;
/*
console.log(vampire_test(6,21));
console.log(vampire_test(10,11));
*/
