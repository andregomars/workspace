var events = require('events');
var util = require('util');

function Door(location) {
	this.location = location;
	events.EventEmitter.call(this);

	this.open = function() {
		this.emit('open');
	};

	this.close = function() {
		this.emit('close');
	};
}

//Door.prototype = events.EventEmitter.prototype;
util.inherits(Door, events.EventEmitter);
var frontDoor = new Door('front');
frontDoor.once('open', function(){
	console.log('ring ring ring');
});
frontDoor.addListener('open', function(){
	console.log('hello!');
});
frontDoor.on('close', function(){
	console.log('bye!');
});

// console.log(require('util').inspect(frontDoor.listeners('open')));
// console.log(require('util').inspect(frontDoor.listeners('close')));

frontDoor.open();
frontDoor.open();
frontDoor.close();
