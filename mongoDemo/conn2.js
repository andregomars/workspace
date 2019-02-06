const MongoClient = require('mongodb').MongoClient,


const urlDbConn = 'mongodb://admin:fccdbo123!@127.0.0.1:27017/?authMechanism=DEFAULT';

(async() => {
  var conn = await MongoClient.connect(urlDbConn, { useNewUrlParser: true });
  await conn.db('mydb').collection('mycoll').insertOne({name: 'andre'});
  console.log('inserted into mydb.mycoll')
  conn.close();
})();