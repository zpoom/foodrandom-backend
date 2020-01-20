import express, { Application } from "express";
import { PORT } from "./config/const";
import graphqlHTTP from "express-graphql";
import { schema, resolver } from "./graphql";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
class FoodRandomApp {
  app: Application;
  constructor() {
    const app = express();
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    const MONGO_URI: string =
      "mongodb+srv://sorawit:sunthawatrodom@cluster0-b4ovo.mongodb.net/FOOD-RANDOM?retryWrites=true&w=majority";
    console.log("start connecting to the database...");
    mongoose.Promise = global.Promise;
    mongoose
      .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("[success] connected to the database."))
      .catch(err => {
        console.log("[failed] disconnected from the the database.");
      });
    app.use(cors());
    app.post(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        rootValue: resolver,
        graphiql: true
      })
    );
    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        rootValue: resolver,
        graphiql: true
      })
    );
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
    this.app = app;
  }
}

export default FoodRandomApp;
