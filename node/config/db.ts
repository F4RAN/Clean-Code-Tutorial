import { MongoClient } from "mongodb";


export const getMongoClient = async () => {
    const mongo = new MongoClient("mongodb://localhost:27017");
    await mongo.connect();
    return mongo.db("Mini-CC");
}