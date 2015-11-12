var assert = require('assert');

function trib(signature,n)
{
	if (n < 3) return signature.slice(0,n);
	else if (n === 3) return signature;
	else signature.push(signature.slice(-3).reduce((a,b)=>(a+b)));
	return trib(signature,n-1);
}

console.log(trib([1,1,1],3));
console.log(trib([300,200,100],0));

describe('#trib([1,1,1],n)', function(){
	it('should return expected array when signature is [1,1,1]', function(){
		assert.deepEqual(trib([1,1,1],10),[1,1,1,3,5,9,17,31,57,105]);
		assert.deepEqual(trib([1,1,1],1),[1]);
		assert.deepEqual(trib([1,1,1],0),[]);
	});
});

describe('#trib([0,0,1],n)', function(){
	it('should return expected array when signature is [0,0,1]', function(){
		assert.deepEqual(trib([0,0,1],10),[0,0,1,1,2,4,7,13,24,44]);
	});
});

describe('#trib([0,1,1],n)', function(){
	it('should return expected array when signature is [0,1,1]', function(){
		assert.deepEqual(trib([0,1,1],10),[0,1,1,2,4,7,13,24,44,81]);
	});
});
