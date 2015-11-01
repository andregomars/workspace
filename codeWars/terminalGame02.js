var assert = require('assert');

Hero.prototype.move = function (dir) {
  // Code hero
}

var testHero = new Hero();
testHero.move('down');
assert.equal(testHero.position, '10');
testHero.move('right');
assert.equal(testHero.position, '11');
testHero.move('up');
assert.equal(testHero.position, '01');