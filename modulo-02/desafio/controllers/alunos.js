const express = require("express");
const { validate, Joi } = require("../validation.js");
const gradesRepository = require("../repositories/grades.js");

var router = express.Router();

let wrap = (fn) => (...args) => fn(...args).catch(args[2]);

router.get(
  "/notafinal",
  validate({
    student: Joi.string().required(),
    subject: Joi.string().required(),
  }),
  wrap(async (req, res) => {
    const { student, subject } = req.body;

    const grades = await gradesRepository.findBy({
      student,
      subject,
    });

    const nota = grades.reduce((nota, grade) => {
      return nota + grade.value;
    }, 0);

    res.json({ nota });
  })
);

router.get(
  "/media",
  validate({
    subject: Joi.string().required(),
    type: Joi.string().required(),
  }),
  wrap(async (req, res) => {
    const { subject, type } = req.body;

    const grades = await gradesRepository.findBy({ subject, type });

    const media = grades.reduce((nota, grade) => {
      return nota + grade.value / grades.length;
    }, 0);

    return res.json({ media });
  })
);

router.get(
  "/melhores-notas",
  validate({
    subject: Joi.string().required(),
    type: Joi.string().required(),
  }),
  wrap(async (req, res) => {
    const { subject, type } = req.body;

    const grades = await gradesRepository.findBy({ subject, type });

    let melhoresNotas = grades.sort((a, b) => b.value - a.value);

    melhoresNotas.splice(3);

    return res.json({ notas: melhoresNotas });
  })
);

module.exports = { router };
