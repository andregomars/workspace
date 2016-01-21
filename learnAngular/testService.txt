* to Get List
curl "http://localhost:9000/api/v1/todo"

* to add item into list
curl "http://localhost:9000/api/v1/todo" -d "{\"text\":\"andre\"}"
curl "http://localhost:9000/api/v1/todo" -d "{\"text\":\"go\"}"
curl "http://localhost:9000/api/v1/todo" -d "{\"text\":\"mars\"}"

* to update item in the list
curl "http://localhost:9000/api/v1/todo/3" -d "{\"text\":\"earth\"}"

* to delete item by id
curl "http://localhost:9000/api/v1/todo/2" -X DELETE
