var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

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

router.use(bodyParser.json());
router.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

router.get('/v1/todo', function(req, res) {
	//items.push('{"text":"defaulOne"}');
	res.json(items).end();
});

router.post('/v1/todo*', function(req, res) {
	var id = null;
	if (req.url.match(/\d+/) != null) {
		id = parseInt(req.url.split('/').slice(-1));
	}
	var body = '';
	item_id++;
	var obj = req.body;
	obj.id = item_id;
	if (!!id) {
		var item = find_by_id(id);
		item.text = obj.text;
	} else {
		items.push(obj);
	}
	res.json(items).end();
})

router.delete('/v1/todo*', function(req, res) {
	var id = null;
	if (req.url.match(/\d+/) != null) {
		id = parseInt(req.url.split('/').slice(-1));
	}
	if (!!id) {
		var ind = find_index_by_id(id);
		items.splice(ind, 1);
	}
	res.json(items).end();
});

module.exports = router;