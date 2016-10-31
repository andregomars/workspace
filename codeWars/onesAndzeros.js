
const binaryArrayToNumber = arr => {
  // your code
  return arr.map((x,i)=>x*Math.pow(2,arr.length-i-1)).reduce((a,b)=>a+b);
};

module.exports = binaryArrayToNumber;