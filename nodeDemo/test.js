var readline = require('readline');
var fs = require('fs');

var rs = fs.createReadStream('./in/997.txt');

//rs.pipe(process.stdout);

var rl = readline.createInterface({
  input: rs,
  output: process.stdout
});

rl.on('line', function(data){
	//console.log(data);
});