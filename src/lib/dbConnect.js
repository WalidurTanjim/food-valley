import { MongoClient, ServerApiVersion } from "mongodb";

const dbConnect = async(collectionName) => {
    const uri = process.env.DB_URI;
    const db_name = process.env.DB_NAME;

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(db_name).collection(collectionName);
};

export default dbConnect;