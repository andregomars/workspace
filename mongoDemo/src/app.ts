import { MongoLayer } from './app/mongo-layer';

(async () => {
    await MongoLayer.getInstance().Connect();
    const conn = MongoLayer.getInstance().Client;

    try {
        await conn.db('mydb').collection('mycoll').insertOne({ name: 'andre' });
        console.log('inserted into mydb.mycoll')
    } catch (err) {
        console.log(err.stack);
    }

    conn.close();
})();
