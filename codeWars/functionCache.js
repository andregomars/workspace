var assert = require('assert');

var complexFunction = function(arg1, arg2) {
 console.log('arg1+arg2: ', arg1+arg2) 
};
var cachedFunction = cache(complexFunction);


function cache(func) {
  // do your magic here
  var argsUsed = {};
  return function() {
  	var args = Array.prototype.slice.call(arguments);
  	if (args in argsUsed) 
  		return argsUsed[args];
  	else  {
  		argsUsed[args] = func.apply(this,args);
  		return argsUsed[args];
  	}
  };
}


function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));

  }
}

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
