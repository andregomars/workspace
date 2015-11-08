var assert = require('assert');

function fix_countdown() {
  for (var prop in Array.prototype) delete Array.prototype[prop];
  for (var prop in Object.prototype) delete Object.prototype[prop];
  Object.freeze(Array.prototype);
  Object.freeze(Object.prototype);
}

function countdown() {
//const countdown = function() {
  var ret = "";
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var number in numbers) {
    if (ret) ret += ", ";
    if (number < 10)
      number = 10 - number;
    else if (number == 10)
      number = "Zero";
    ret += number;
  }
  // for (var i = 0; i < numbers.length; i++) {
  // 	var number = numbers[i];
  //   if (ret) ret += ", ";
  //   if (number < 10)
  //     number = 10 - number;
  //   else if (number == 10)
  //     number = "Zero";
  //   ret += number;
  // }
  ret += "!";
  return ret;
}

Array.prototype.test = 1;
Object.prototype.bug = 2;

fix_countdown();

Array.prototype.test = 1;
Object.prototype.bug = 2;

//countdown = function() {return 'happy';}; 

assert.equal(countdown(),
  "10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Zero!");