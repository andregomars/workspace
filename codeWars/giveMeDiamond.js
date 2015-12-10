var assert = require('assert');

function diamond(n){
  if (n <= 0 || n%2 === 0) return null;
  var mid = Math.floor(n/2)+1;
  var diam = [];
  for (var i = 1; i <= n; i++) {
  	var line = '';
  	if (i <= mid) {
	  	line = Array(mid-i+1).join(' ') + Array(2*i).join('*') + '\n';
  	}
  	else {
  		line = Array(i-mid+1).join(' ') + Array(2*(n+1-i)).join('*') + '\n';
  	}
  	diam.push(line);
  };
  return diam.join('');
}


describe('#diamond()', function(){
	it('should resemble expected diamond shape', function(){
	  assert.equal(diamond(3), " *\n***\n *\n");
	  assert.equal(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
	  assert.equal(diamond(2), null);
	  assert.equal(diamond(-3), null);
	  assert.equal(diamond(0), null);
	});
});


/*
--3--
x*
***
 *

--5--
xx*
x***
*****
 ***
  *

--7--
xxx*
xx***
x*****
*******
 *****   7+1-5 : 2(n+1-i)-1
  ***	 7+1-6
   *	 7+1-7

*/
