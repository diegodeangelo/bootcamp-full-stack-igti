const express = require("express");
const { validate, Joi } = require("../validation.js");
const gradesRepository = require("../repositories/grades.js");

var router = express.Router();

let wrap = (fn) => (...args) => fn(...args).catch(args[2]);

router.get(
  "/",
  wrap(async (req, res) => {
    const grades = await gradesRepository.findAll();

    if (!grades) {
      return res.status(404).send("Nenhuma grade encontrada!");
    }

    return res.send(grades);
  })
);

router.get(
  "/:id",
  wrap(async (req, res) => {
    const grade = await gradesRepository.find(req.params.id);

    if (!grade) {
      return res.status(404).send("Nenhuma grade encontrada!");
    }

    return res.send(grade);
  })
);

router.post(
  "/",
  validate({
    student: Joi.string().required(),
    subject: Joi.string().required(),
    type: Joi.string().required(),
    value: Joi.number().required(),
  }),
  wrap(async (req, res) => {
    return res.send(await gradesRepository.insert(req.body));
  })
);

router.put(
  "/:id",
  validate({
    student: Joi.string().required(),
    subject: Joi.string().required(),
    type: Joi.string().required(),
    value: Joi.number().required(),
  }),
  wrap(async (req, res) => {
    return res.send(
      await gradesRepository.update({ id: req.params.id, ...req.body })
    );
  })
);

router.delete(
  "/:id",
  wrap(async (req, res) => {
    const { id } = req.params;

    await gradesRepository.exclude(id);

    return res.send(`Id ${id} excluído com sucesso!`);
  })
);

module.exports = { router };
