var Test = require("assert");
var binaryArrayToNumber = require("../onesAndzeros.js");

describe("One's and Zero's", () => {
  it("Given an array of one's and zero's convert the equivalent binary value to an integer. \
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1 \
	", () => {
	Test.equal(binaryArrayToNumber([0,0,0,1]), 1);
      Test.equal(binaryArrayToNumber([0,0,1,0]), 2);
      Test.equal(binaryArrayToNumber([1,1,1,1]), 15);
      Test.equal(binaryArrayToNumber([0,1,1,0]), 6);
  });

});