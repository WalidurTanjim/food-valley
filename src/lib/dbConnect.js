import { MongoClient, ServerApiVersion } from "mongodb";

export const dbConnect = async (collectionName) => {
    const uri = process.env.DB_URI;
    const dbName = process.env.DB_NAME;

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.dbConnect(dbName).collection(collectionName);
}