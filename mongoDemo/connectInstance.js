const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function(err) {
    assert.equal(null, err);
    console.log('connected to mongodb instance');

    client.close();
});
