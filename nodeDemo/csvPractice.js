var csv = require('csv');

var run = function() {
	var source = [
			['LAX','Los Angeles','USA'],
			['CTU','Chengdu','CHN'],
			['SFO','San Francisco','USA'],
			['JFK','NewYork','USA'],
		];
	csv.transform(source, function(row) {
		// row.push(row.shift());
		// return row.join(',') + '\n';
		if (row[0] === 'CTU') {
			return null;
		}
		else {
			return row + '\n';
		}
	})
	.pipe(process.stdout);
};

module.exports.run = run;