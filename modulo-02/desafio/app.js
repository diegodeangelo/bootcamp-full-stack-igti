const express = require("express");
const { validationError } = require("./validation.js");
const gradesRouter = require("./controllers/grades.js").router;
const alunosRouter = require("./controllers/alunos.js").router;

const app = express();

app.use(express.json());

app.use("/grades", gradesRouter);
app.use("/alunos", alunosRouter);

app.use(function (err, req, res, next) {
  erro = validationError(err);

  if (erro) {
    return res.status(err.statusCode).json({ error: erro });
  }

  return res.status(500).json(err.message);
});

app.listen(8080, () => console.log("Api Started!"));
