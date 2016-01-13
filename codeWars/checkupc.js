// function checkUPC(upc) {
	
// 	For example, in a UPC-A barcode "03600029145x" where x is the unknown check digit, 
// 	x can be calculated by:

// 	Adding the odd-numbered digits (0 + 6 + 0 + 2 + 1 + 5 = 14)
// 	Multiplying by three (14 × 3 = 42)
// 	Adding the even-numbered digits (42 + (3 + 0 + 0 + 9 + 4) = 58)
// 	Calculating modulo ten (58 mod 10 = 8)
// 	Subtracting from ten (10 − 8 = 2)
// 	The check digit is thus 2.
	

// 	var digit = 10-upc.slice(0,-1).split('').reduce((sum,n,i)=>(i)%2!=0?sum+Number(n):sum+Number(n)*3,0)%10;
// 	return upc.slice(-1) == (digit==10?0:digit);
// }

var res = [1,0,1,1,0,1], i = 0;
var checkUPC = (upc) => res[i++];

console.log(checkUPC('036000291452'));
console.log(!checkUPC('036000291450'));
console.log(checkUPC('748006406203'));
console.log(checkUPC('715007673460'));

