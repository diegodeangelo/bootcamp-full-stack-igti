import express from "express";
import mongoose from "mongoose";
import { accountRouter } from "./src/routes.js";
import dotenv from "dotenv";

(async () => {
  const { DB_USER, DB_PASS } = dotenv.config().parsed;

  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pveje.mongodb.net/trabalho_pratico?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

  console.log("Conectado ao MongoDB Atlas!!");

  const app = express();

  app.use(express.json());
  app.use("/conta", accountRouter);

  app.listen(3000, () => console.log("API iniciada!"));
})();
