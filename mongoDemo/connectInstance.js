const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url, { useNewUrlParser: true });

try {
    // assert.fail('test failure!');
    // throw new Error('test error');

    client.connect(function (err) {
        assert.equal(null, err);
        console.log('connected to mongodb instance');

        client.close();
    });
} catch (error) {
    console.log(error)
}
