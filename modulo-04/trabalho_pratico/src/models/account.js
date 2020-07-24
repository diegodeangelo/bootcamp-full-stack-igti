import mongoose from "mongoose";

export default mongoose.model(
  "account",
  new mongoose.Schema({
    agencia: { type: Number, required: true },
    conta: { type: Number, required: true },
    name: { type: String, required: true },
    balance: {
      type: Number,
      required: true,
      validate: (value) => {
        if (value < 0) {
          throw new Error("O valor de balance não pode ser negativo!");
        }
      },
    },
  })
);
