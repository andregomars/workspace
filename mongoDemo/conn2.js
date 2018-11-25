const MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    assert = require('assert');

// var mongoClient = new MongoClient(new Server('localhost', 27017));
var mongoClient = new MongoClient(new Server('127.0.0.1', 27017));
mongoClient.connect(function(err, mongoClient) {
  var db1 = mongoClient.db("mydb");
  console.log(db1.databaseName);
  mongoClient.close();
});