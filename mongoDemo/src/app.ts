import { MongoClient } from 'mongodb';
// import * as mongoskin from 'mongoskin';
const mongoskin = require('mongoskin');
const mongojs = require('mongojs');

const urlDbConn = 'mongodb://admin:fccdbo123!@127.0.0.1:27017/?authMechanism=DEFAULT';
var conn = mongoskin.db(urlDbConn, { useNewUrlParser: true });
// var conn = mongojs(urlDbConn, { useNewUrlParser: true });

(async () => {
    // var conn = await MongoClient.connect(urlDbConn, { useNewUrlParser: true });

    await conn.collection('mycoll').insertOne({ name: 'andre' });
    console.log('inserted into mydb.mycoll')
    conn.close();
})();
