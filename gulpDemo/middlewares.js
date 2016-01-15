module.exports = function(connect, middlewares) {
	var items = [];
	var item_id = 0;
	middlewares.push(
		connect().use('/api/v1/todo', function(req, res, next) {
			res.setHeader('Contenty-Type','application/json');
			if (req.method == 'GET') {
				res.end(JSON.stringify(items));
			}
			if (req.method == 'POST') {
				var body = '';
				req.on('data', function(data) {
					body += data;
				});
				req.on('end', function() {
					item_id++;
					var obj = JSON.parse(body);
					obj.id = item_id;
					items.push(obj);
					res.end(JSON.stringify(items));
				});
			}
		})
	);
	return middlewares;
}