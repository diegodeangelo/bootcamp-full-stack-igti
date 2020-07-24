import express from "express";
import {
  deposito,
  saque,
  saldo,
  remove,
} from "./controllers/accountController.js";

const accountRouter = express.Router();

accountRouter.post("/deposito", deposito);
accountRouter.post("/saque", saque);
accountRouter.get("/saldo", saldo);
accountRouter.delete("/", remove);

export { accountRouter };
