/*
given a word like 'abcd', list all the possible permutations
*/

var assert = require('assert');

var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();

    console.log(i);
    console.log(input);
    console.log(usedChars);
    console.log(permArr);

debugger;
  }
  return permArr
};

console.log(permute(['a','b','c','d']));

/*when i=0

input = 'cd'
used = [a,b]


input = 'd'
used = [a,b,c]   
out = ['abcd']

*/


//assert.equal(permuteString(input),[...]]);
/*
abcd bacd	cabd	dabc
abdc badc
acbd bcad
acdb bcda
adbc bdac
adcb bdca
*/