var assert = require('assert');

var Hero = function Hero() {
	this.position = '00';
};

Hero.prototype.move = function (dir) {
  // Code hero
  var r = parseInt(this.position[0]);
  var c = parseInt(this.position[1]);
  switch(dir) {
  	case "up":
  		if (r === 0) throw new Error('no more up');
  		r += -1;
  		break;
  	case "down":
  		if (r === 4) throw new Error('no more down');
  		r += 1;
  	  	break;
  	case "left":
  		if (c === 0) throw new Error('no more left');
  		c += -1;
  	  	break;
  	case "right":
  		if (c === 4) throw new Error('no more right');
  		c += 1;
  		break;
  	default:
  		throw new Error("direction can only be up/down/left/right");
  		break;
  }
  this.position = r + '' + c;
}


var testHero = new Hero();
testHero.move('down');
assert.equal(testHero.position, '10');
testHero.move('right');
assert.equal(testHero.position, '11');
testHero.move('up');
assert.equal(testHero.position, '01');
testHero.move('right');
assert.equal(testHero.position, '02');
testHero.move('down');
assert.equal(testHero.position, '12');
testHero.move('down');
assert.equal(testHero.position, '22');
