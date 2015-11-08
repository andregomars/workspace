var assert = require('assert');


function solution(number){
  var values = [];
  for (var i = 1; i < number; i++) {
  	if(i%3 === 0 || i%5 ===0) values.push(i); 
  };
  return values.reduce((a,b)=>a+b,0);
}


assert.equal(solution(10),23);
//10, 3,5,6,9
assert.equal(solution(20),78);
//20, 3,5,6,9,10,12,15,18
assert.equal(solution(15),45);
//15, 3,5,6,9,10,12
assert.equal(solution(1),0);
assert.equal(solution(5),3);
