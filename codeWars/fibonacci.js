var assert = require('assert');

function fib(signature,n)
{
	if (n < 2) return signature.slice(0,n);
	else if (n === 2) return signature;
	else signature.push(signature.slice(-2).reduce((a,b)=>(a+b)));
	return fib(signature,n-1);
}

describe('#fib([1,1],n)', function(){
	it('should return expected array when signature is [1,1]', function(){
		assert.deepEqual(fib([1,1],2),[1,1]);
		assert.deepEqual(fib([1,1],5),[1,1,2,3,5]);
		assert.deepEqual(fib([1,1],10),[1,1,2,3,5,8,13,21,34,55]);
		assert.deepEqual(fib([1,1],1),[1]);
		assert.deepEqual(fib([1,1],0),[]);
	});
});

describe('#fib([0,1],n)', function(){
	it('should return expected array when signature is [0,1]', function(){
		assert.deepEqual(fib([0,1],5),[0,1,1,2,3]);
	});
});