const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const user = encodeURIComponent('root');
const pass = encodeURIComponent('example');
const authMech = 'DEFAULT';
// const url = `mongodb://${user}:${pass}@localhost:27017/?authMechanism=${authMech}`;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function(err) {
    assert.equal(null, err);
    console.log('connected to mongodb instance');

    const db = client.db('mydb');

    insertDocs(db, function() {
        client.close();
    });
});

const insertDocs = function(db, cb) {
    const collection = db.collection('customers');
    // const docs = [{a:1}, {b:2}, {c:3}];
    const docs = [{raw: Buffer.from('880C00290BFCFFFF00FFFFFFFF', 'hex')}];
    collection.insertMany(docs, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.ops.length);
        console.log('insert docs into collection customers');
    });
}