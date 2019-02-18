import { MongoClient } from 'mongodb';

export class MongoLayer {
    private static instance: MongoLayer;
    private client: MongoClient;

    public static getInstance() {
        if (!MongoLayer.instance) {
            MongoLayer.instance = new MongoLayer();
        }
        return MongoLayer.instance;
    }

    public get Client(): MongoClient {
        return this.client;
    }

    private constructor() {
        const url = 'mongodb://admin:fccdbo123!@127.0.0.1:27017/?authMechanism=DEFAULT';
        // const url = 'mongodb+srv://admin:fccdbo123!@cluster0-pwbs7.mongodb.net';
        this.client = new MongoClient(url, { useNewUrlParser: true });
    }

    public async Connect() {
        await this.client.connect();
    }
}
