import express from "express";
import { MongoUserRepository } from "./infrastructure/MongoUserRepository";
import { CreateUser } from "./application/usecases/CreateUser";
import { createUserController } from "./presentation/http/CreateUserController.js";
import { MongoClient } from "mongodb";


const mongo = new MongoClient();
const repo = new MongoUserRepository(mongo);
const createDeal = new CreateUser(repo);

const app = express();
app.use(express.json());
app.post("/create_user", createUserController(createDeal));
app.listen(3000);
