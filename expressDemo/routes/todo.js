var express = require('express');
var router = express.Router();

var items = [];
var item_id = 0;
var find_index_by_id = function(id) {
	for(var i in items) {
		if (items[i].id === id) return i;
	}
	return -1;
};
var find_by_id = function(id) {
	var i = find_index_by_id(id);
	return i != -1 ? items[i] : null;
};

router.get('/v1/todo', function(req, res) {
	res.setHeader('Content-Type','application/json');
	res.end(JSON.stringify(items));
});

router.post('/v1/todo', function(req, res, next) {
	var body = '';
	req.on('data', function(data) {
		body += data;
	});
	req.on('end', function() {
		item_id++;
		var obj = JSON.parse(body);
		obj.id = item_id;
		if (id != null) {
			var item = find_by_id(id);
			item.text = obj.text;
		} else {
			items.push(obj);
		}
		res.end(JSON.stringify(items));
	});
});

module.exports = router;