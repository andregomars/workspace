const _ = require('lodash');
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const user = encodeURIComponent('root');
const pass = encodeURIComponent('example');
const authMech = 'DEFAULT';
// const url = `mongodb://${user}:${pass}@localhost:27017/?authMechanism=${authMech}`;
const url = 'mongodb://admin:fccdbo123!@localhost:27017?authMechanism=DEFAULT';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function (err) {
    assert.equal(null, err);
    console.log('connected to mongodb instance');

    try {
        const db = client.db('mydb');

        insertDocs(db, function () {
            client.close();
        });
    } catch (error) {
        console.log(error);
        client.close();
    }
});

const insertDocs = function (db, cb) {
    const collection = db.collection('customers');
    // const docs = [{ raw: Buffer.from('880C00290BFCFFFF00FFFFFFFF', 'hex') }];
    const p1 = {
        // _id: new ObjectID(),
        name: 'Andre'
    };
    const p2 = {
        // _id: new ObjectID(),
        name: 'Andre'
    };
    const p3 = {
        // _id: new ObjectID(),
        name: 'Andre'
    };
    const docs = [p1, p1, p1];
    collection.insertMany(docs, function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.ops.length);
        console.log('insert docs into collection customers');
    });
}

// const insertDocs = function (db, cb) {
//     const collection = db.collection('customers');
//     const person = {
//         name: 'Andre'
//     };
//     const docs = [person, person, person];
//     collection.insertMany(docs, { forceServerObjectId: true }, function (err, result) {
//         assert.equal(err, null);
//         assert.equal(3, result.ops.length);
//         console.log('insert docs into collection customers');
//     });
// }