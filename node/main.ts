import express from "express";
import { MongoUserRepository } from "./infrastructure/MongoUserRepository";
import { CreateUser } from "./application/usecases/CreateUser";
import { createUserController } from "./presentation/http/CreateUserController.js";
import { MongoClient } from "mongodb";

async function start() {
    const mongo = new MongoClient("mongodb://localhost:27017");
    await mongo.connect();
    const mongodb = mongo.db("Mini-CC");
    
    const repo = new MongoUserRepository(mongodb);
    const createUser = new CreateUser(repo);
    
    const app = express();
    app.use(express.json());
    app.post("/create_user", createUserController(createUser));
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
}

start().catch(console.error);
